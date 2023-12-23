import React from 'react'
import { motion } from "framer-motion"

export const RequiredValidation = ({ msg }) => {
  return (
    <motion.span
      className="text-alert-required"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {msg}
    </motion.span>
  )
}
