import React from 'react'
import ContactUsBanner from './ContactUsBanner/ContactUsBanner'
import ContactComponent from './ContactUsForm/ContactComponent'
import ContactMap from './ContactUsForm/ContactMap'




const ContactUs = () => {
  return (
    <div>
      <ContactUsBanner/>
      <ContactComponent/>
      <ContactMap></ContactMap>
    </div>
  )
}

export default ContactUs
