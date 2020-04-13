export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9454b87b827c0189fbc06f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-k5hwt5rg',
                  apiId: 'f91aa271-2462-452c-80d4-bf695bcf6ee0'
                },
                {
                  buildHookId: '5e9454b8b6d1e0024926192c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-osxedb4o',
                  apiId: '02f39f14-92f6-4cf3-ac6d-014f651e08cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stephenhendry/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-osxedb4o.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
