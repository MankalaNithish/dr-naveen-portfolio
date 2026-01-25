import { defineType, defineField } from 'sanity'

const ngoRole = defineType({
  name: 'ngoRole',
  title: 'NGO Role',
  type: 'document',
  fields: [
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
      validation: (Rule) => Rule.required().custom(async (value, context) => {
        const client = context.getClient({ apiVersion: '2023-01-01' });
        const id = context.document?._id.replace(/^drafts\./, '');
        const query = `*[_type == "ngoRole" && organization == $organization && _id != $id && !(_id in path("drafts.**"))]`;
        const params = { organization: value, id };
        const results = await client.fetch(query, params);
        return results.length === 0 ? true : 'Organization name must be unique';
      }),
    }),
    defineField({
      name: 'positions',
      title: 'Positions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'roleName',
              title: 'Role Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'fromYear',
              title: 'From Year',
              type: 'string',
              description: 'e.g., 2020',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'toYear',
              title: 'To Year',
              type: 'string',
              description: 'e.g., 2022. Leave empty if still active.',
            }),
          ],
          preview: {
            select: {
              title: 'roleName',
              from: 'fromYear',
              to: 'toYear',
            },
            prepare({ title, from, to }) {
              return {
                title,
                subtitle: `${from} – ${to || 'Present'}`,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})

export default ngoRole
