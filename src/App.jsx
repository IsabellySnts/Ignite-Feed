import { Header } from "./Components/Header/Header"
import { Post } from "./Post"
import styles from "./App.module.css"
import './global.css'
import { Sidebar } from "./Components/Sidebar/Sidebar"
export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Diego Fernandes" content="Contéudo" />
          <Post author="Isabelly dos Santos" content="Contéudo de Isabelly" />
        </main>
      </div>
    </div>
  )
}