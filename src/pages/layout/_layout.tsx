
import { Outlet } from 'react-router'
import Navbar from '../../components/ui/navbar'
import Container from '../../components/ui/container'
const items = [
  {
    id: 1,
    label: 'Me',
    path: '/me'
  },
  {
    id: 2,
    label: 'My Works',
    path: '/my-works'
  },
  {
    id: 3,
    label: 'Reach Me',
    path: '/reach-me'
  }
]

const Layout = () => {
  return (
    <Container>
      <Navbar
      items={items}
      />
      <Outlet/>
    </Container>
  )
}

export default Layout