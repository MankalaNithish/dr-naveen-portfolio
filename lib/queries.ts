import { groq } from 'next-sanity'

export const ngoRolesQuery = groq`
  *[_type == "ngoRole"] | order(organization asc) {
    _id,
    organization,
    positions[] | order(fromYear desc) {
      roleName,
      fromYear,
      toYear
    }
  }
`
export const profileQuery = `
  *[_type == "profile"][0] {
    name,
    headline,
    about,
    heroImage {
      asset->{
        _id,
        url,
        metadata {
          lqip
        }
      },
      hotspot,
      crop
    }
  }
`;

export const insightsQuery = `
  *[_type == "insight"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    summary,
    "slug": slug.current,
    publishedAt
  }
`;

export const allInsightsQuery = `
  *[_type == "insight"] | order(publishedAt desc)[$start...$end] {
    _id,
    title,
    summary,
    "slug": slug.current,
    publishedAt
  }
`;

export const insightBySlugQuery = `
  *[_type == "insight" && slug.current == $slug][0] {
    title,
    body,
    publishedAt
  }
`;