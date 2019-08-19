export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d5a9bf8a58277cfb3310a98',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7cz2viyq',
                  apiId: 'c39448f8-3867-4b8a-8d0c-735c88fb90f7'
                },
                {
                  buildHookId: '5d5a9bf8a0665f340bc56916',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5r4pd7yn',
                  apiId: 'aa19286d-2ab1-4eca-9891-f7b16d39f35d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/progressbees/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5r4pd7yn.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
