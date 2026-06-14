import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0,240,255,0.4)' }}
          whileTap={{ scale: 0.95 }}
          style={{
            position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 50,
            width: '2.75rem', height: '2.75rem', borderRadius: '50%',
            background: 'linear-gradient(135deg, #00F0FF, #3B82F6)',
            border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#05060A',
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}