import Layout from '../components/SimpleLayout'
import { motion } from 'framer-motion'
import Home from '../components/Home'
import { cmsApi } from '../lib/cms'

export default function Index(props) {
  return (
    <motion.div
      initial={{
        opacity: 1
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 1
      }}
      transition={{ duration: 0.5 }}
    >
      <Layout>
        <Home {...props} />
      </Layout>
    </motion.div>
  )
}

export async function getStaticProps() {
  // const { data: home } = await cmsApi.get('/homepage')
  const { data: highlights } = await cmsApi.get('/highlights')
  const { data: projects } = await cmsApi.get('/projects')
  const { data: links } = await cmsApi.get('/links')
  const { data: posts } = await cmsApi.get('/posts')

  return {
    props: {
      highlights, projects, links, posts
    },
    revalidate: 10
  }
}
