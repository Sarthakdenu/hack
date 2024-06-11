import React from 'react'
import {useJsApiLoader} from '@react-google-maps/api'
function Maps() {
  return (
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.944040716018!2d72.85164977466702!3d19.153926649522564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b743bb76932f%3A0xf497dce353e308fb!2sJP%20Morgan%20Chase%20%26%20Co.%20Towers!5e0!3m2!1sen!2sin!4v1718127945687!5m2!1sen!2sin" width="800" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Maps
