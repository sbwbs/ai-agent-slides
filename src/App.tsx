import SlidePresentation from './components/SlidePresentation'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="w-full h-full">
        <SlidePresentation />
      </div>
    </LanguageProvider>
  )
}

export default App
