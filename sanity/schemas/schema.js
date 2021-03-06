import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import { singletonHome } from './singletonHome'
import { singletonMore } from './singletonMore'
import { project } from './projects'
import { singletonHire } from './singletonHire'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    singletonHome,
    singletonMore,
    singletonHire,
    project
  ]),
})
