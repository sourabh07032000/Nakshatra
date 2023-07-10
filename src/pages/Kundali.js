import React from 'react'
import Kundali_form from './Kundali_form';
import K_team from './K_team';
import Online_kundali from './Online_kundali';
import Ask_question from './Ask_question';
import Header from './Header';
import Footer from './Footer';




function Kundali() {
  return (
    <div>
      <Header />
    <Kundali_form /> 
    <K_team />
    <Online_kundali />
   <Ask_question /> 
   <Footer />
      

    </div>
  )
}

export default Kundali;