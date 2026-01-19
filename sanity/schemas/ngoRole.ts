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
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
  ],
})

export default ngoRole
