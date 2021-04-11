import sytles from './layout.module.css'

export default function Layout({children}) {
  return <div className={sytles.container}>{children}</div>
}
