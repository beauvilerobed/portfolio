import React from 'react';
import Summary from '../components/Summary'
import '../App.css';
 
function ResearchAndTeachings(props) {
  return (
    <div className="w3-half w3-container" id="ResearchAndTeachings">
    <div className="w3-padding-64 w3-animate-right w3-center">
        <h1><strong>Research and Teachings</strong></h1>
                <div id="robedbeauvile" />
                <Summary
                link="https://github.com/beauvilerobed/Lets_learn_sql_webinar_1_and_2"
                title="One of the best ways to really learn about something is having a concrete example (or counter- example) of that something. In this talk we will walkthrough a con- crete example. We will see the ba- sics of SQL in action on a newly designed database  and other awe- some stuff that I won’t speak of at this moment. You’ll just have to come  and see for yourself."
                category="SQL, PHP, Microsoft Office, Mamp, phpMyAdmin"
                />
                <Summary
                link="https://github.com/beauvilerobed/Lets_learn_sql_webinar_1_and_2"
                title="One of the best ways to really learn about something is having a concrete example (or counter- example) of that something. In this talk we will walkthrough a con- crete example. We will see the ba- sics of SQL in action on a newly designed database  and other awe- some stuff that I won’t speak of at this moment. You’ll just have to come  and see for yourself."
                category="SQL, PHP, Microsoft Office, Mamp, phpMyAdmin"
                />
        </div>
    </div>
  )
}
 
export default ResearchAndTeachings;