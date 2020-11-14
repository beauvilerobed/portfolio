import React from 'react';
import '../App.css';
import Icon from '../Images/ThumbnailImage';
import Thumbnail from '../components/Thumbnail.js';
import Summary from '../components/Summary.js';
import learnSQL from '../Images/learnSQL.png'
import learnSQL2 from '../Images/learnSQL2.png'
import DSA from '../Images/DSA.jpg'
 
function Extra(props) {
  return (
    <div className="w3-half w3-container w3-center" id="extracurricular">
        <div className="w3-padding-64 w3-animate-left">
        <h1><strong>Extra Extra!</strong></h1>

                <Icon icon={DSA} />
                <Thumbnail
                link=""
                title="Design and Analysis of Algorithms and Fun with Algorithms"
                category="Data Structures and Algorithms"
                />
                <Summary
                link="https://github.com/beauvilerobed/data-structures_and_algorithms"
                title="Topics from Stanford's and UCS's Algorithms and Data Structures course"
                category="Python3, unittest, Javascript, QUnit API"
                />
                <Summary
                link="https://github.com/beauvilerobed/data-structures_and_algorithms"
                title="Fun algorithm problems and data structure constructions that will keep your mind sharp!"
                category="Python3, unittest"
                />


                <Icon icon={learnSQL} />
                <Thumbnail
                link="https://pitt.zoom.us/rec/play/u5R_dbz--Do3Gd2X4gSDU_R9W9W_LPqs1SNM__IOzEfgW3ZRZAWgY7QbM7ZsjCo61KohPPaTmdLMf2oU?startTime=1588968239000&_x_zm_rtaid=bp79UOdnQVuamy3OCN4kYA.1590750115444.5c8cc25b682ee9418e7b3c1b891685f8&_x_zm_rhtaid=897"
                title="Let’s Learn SQL through Set Theory! Part 1"
                category="Computer Science and Mathematics Seminar"
                />
                <Summary
                link="https://github.com/beauvilerobed/Lets_learn_sql_webinar_1_and_2"
                title="Now, I know what you’re asking; what the heck is SQL? It stand s for Structured Query Language. It’s a stand ard computer lan- guage used for accessing  and manipulating databases. Wait! Manipulate databases? Computer language? I thought this was a math talk! Don’t worry this is a math talk and sort of. In this talk we will be learning the basics of a computer language (SQL) using mathematics (set theory). Whether you know some computer languages or none at all, it’s always fun to learn one, so let’s do that!"
                category="SQL, Microsoft Office"
                />


                <Icon icon={learnSQL2} />
                <Thumbnail
                link="https://pitt.zoom.us/rec/play/vpB5Ju6hrzI3HNadswSDBqctW9W8fams0yEa8vYPmk6wB3gGO1H0N7pHYbBk9jUj4awd6dVPRweaSm8y?startTime=1588795106000&_x_zm_rtaid=bp79UOdnQVuamy3OCN4kYA.1590750115444.5c8cc25b682ee9418e7b3c1b891685f8&_x_zm_rhtaid=897/"
                title="Let's Learn SQL through Set Theory! Part 2 Application "
                category="Computer Science and Mathematics Seminar"
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
 
export default Extra;