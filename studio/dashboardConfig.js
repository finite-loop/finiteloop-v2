export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '632a87ce2f11581408fcee76',
                  title: 'Sanity Studio',
                  name: 'finiteloop-website-studio',
                  apiId: 'daef1ac0-08f4-46da-acfa-568e75d5951c'
                },
                {
                  buildHookId: '632a87ce1c3e8110aba219bf',
                  title: 'Portfolio Website',
                  name: 'finiteloop-website',
                  apiId: '9e28af1e-6450-42c9-bca5-5ad3d48a34ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sarathy-partha/finiteloop-website',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://finiteloop-website.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
