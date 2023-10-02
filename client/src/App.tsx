import { CoverImage } from "./components/CoverImage"
import { PersonalInformation } from "./components/PersonalInfo"
import { PersonalProfile } from "./components/PersonalProfile"

// import { AdditionalQuestion } from "./components/AdditionalQuestion"
import { Sidebar } from "./components/Sidebar"

function App() {

  return (
    <div className="App">
      <Sidebar />
      <main className="main space-y-24">
        <CoverImage />
        <PersonalInformation />
        <PersonalProfile />
        {/* <AdditionalQuestion /> */}
      </main>
    </div>
  )
}

export default App
