import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

// Solutions
import Automation from './pages/solutions/Automation'
import Agents from './pages/solutions/Agents'
import Chatbot from './pages/solutions/Chatbot'
import Analytics from './pages/solutions/Analytics'
import Integrations from './pages/solutions/Integrations'

// Industries
import Automotive from './pages/industries/Automotive'
import BankingFintech from './pages/industries/BankingFintech'
import Education from './pages/industries/Education'
import Events from './pages/industries/Events'
import SaaS from './pages/industries/SaaS'
import Healthcare from './pages/industries/Healthcare'
import RealEstate from './pages/industries/RealEstate'
import Ecommerce from './pages/industries/Ecommerce'

// Resources
import Blog from './pages/resources/Blog'
import FAQs from './pages/resources/FAQs'
import Consultant from './pages/resources/Consultant'

// Company
import AboutUs from './pages/company/AboutUs'
import PrivacyPolicy from './pages/company/PrivacyPolicy'
import TermsOfService from './pages/company/TermsOfService'
import Contact from './pages/company/Contact'

// Tools
import CodeGenerator from './pages/tools/CodeGenerator'
import WidgetGenerator from './pages/tools/WidgetGenerator'

import Layout from './components/Layout'

function PageWrapper({ children }) {
  const glowColor1 = children.type?.glowColor1
  const glowColor2 = children.type?.glowColor2
  return (
    <Layout glowColor1={glowColor1} glowColor2={glowColor2}>
      {children}
    </Layout>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Solutions Routes */}
        <Route path="/solutions/automation" element={<PageWrapper><Automation /></PageWrapper>} />
        <Route path="/solutions/agents" element={<PageWrapper><Agents /></PageWrapper>} />
        <Route path="/solutions/chatbot" element={<PageWrapper><Chatbot /></PageWrapper>} />
        <Route path="/solutions/analytics" element={<PageWrapper><Analytics /></PageWrapper>} />
        <Route path="/solutions/integrations" element={<PageWrapper><Integrations /></PageWrapper>} />

        {/* Industry Routes */}
        <Route path="/industries/automotive" element={<PageWrapper><Automotive /></PageWrapper>} />
        <Route path="/industries/banking-fintech" element={<PageWrapper><BankingFintech /></PageWrapper>} />
        <Route path="/industries/education" element={<PageWrapper><Education /></PageWrapper>} />
        <Route path="/industries/events" element={<PageWrapper><Events /></PageWrapper>} />
        <Route path="/industries/saas" element={<PageWrapper><SaaS /></PageWrapper>} />
        <Route path="/industries/healthcare" element={<PageWrapper><Healthcare /></PageWrapper>} />
        <Route path="/industries/real-estate" element={<PageWrapper><RealEstate /></PageWrapper>} />
        <Route path="/industries/ecommerce" element={<PageWrapper><Ecommerce /></PageWrapper>} />

        {/* Resources Routes */}
        <Route path="/resources/blog" element={<PageWrapper><Blog /></PageWrapper>} />
        <Route path="/resources/faqs" element={<PageWrapper><FAQs /></PageWrapper>} />
        <Route path="/resources/consultant" element={<PageWrapper><Consultant /></PageWrapper>} />
        
        {/* Company Routes */}
        <Route path="/company/about" element={<PageWrapper><AboutUs /></PageWrapper>} />
        <Route path="/company/privacy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        <Route path="/company/terms" element={<PageWrapper><TermsOfService /></PageWrapper>} />
        <Route path="/company/contact" element={<PageWrapper><Contact /></PageWrapper>} />

        {/* Tool Routes */}
        <Route path="/tools/code-generator" element={<PageWrapper><CodeGenerator /></PageWrapper>} />
        <Route path="/tools/widget-generator" element={<PageWrapper><WidgetGenerator /></PageWrapper>} />
        
        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}
