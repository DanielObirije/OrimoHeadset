import Header from "../componets/Header"
import Firstsection from "../componets/Firstsection"
import Secondsection from "../componets/Secondsection"
import Thirdsection from "../componets/Thirdsection"
import Forth from "../componets/Forth"
import Fifthsection from "../componets/Fifthsection"
import Sixthsectionp from "../componets/Sixthsectionp"
import Footer from '../componets/Footer'
import Commentsection from "../componets/Commentsection"
function Home() {
  return (
    <div className="main">
       <Header/>
      <Firstsection/>
      <Secondsection/>
      <Thirdsection/>
      <Forth/>
      <Fifthsection/>
      <Sixthsectionp/>
      <Commentsection/>
      <Footer/>
    </div>
  )
}

export default Home
