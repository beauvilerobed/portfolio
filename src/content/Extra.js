import React from 'react';
import '../App.css';
import Thumbnail from '../components/Thumbnail.js';
import Summary from '../components/Summary.js';
 
function Extra(props) {
  return (
    <div className="w3-half w3-container w3-center" id="extracurricular">
        <div className="w3-padding-64 w3-animate-left">
        <h1><strong>Extra Extra!</strong></h1>
                <div id="DSA" />
                <Thumbnail
                title="Design and Analysis of Algorithms"
                category="Data Structures and Algorithms"
                />
                <Summary
                link="https://github.com/beauvilerobed/data-structures_and_algorithms"
                title="Topics from Stanford's and UCS's Algorithms and Data Structures course. 
                        Constructed data structures including graphs for algorithms such as Dijkstra’s shortest path.        "
                category="Python3, unittest"
                />

                <div id="learnSQL" />
                <Thumbnail
                title="Let’s Learn SQL through Set Theory! Part 1"
                category="Computer Science and Mathematics Seminar"
                />
                <Summary
                link="https://github.com/beauvilerobed/Lets_learn_sql_webinar_1_and_2"
                title="Now, I know what you’re asking; what the heck is SQL? It stand s for Structured Query Language. It’s a stand ard computer lan- guage used for accessing  and manipulating databases. Wait! Manipulate databases? Computer language? I thought this was a math talk! Don’t worry this is a math talk and sort of. In this talk we will be learning the basics of a computer language (SQL) using mathematics (set theory). Whether you know some computer languages or none at all, it’s always fun to learn one, so let’s do that!"
                category="SQL, Microsoft Office"
                />

                <div id="learnSQL2" />
                <Thumbnail
                title="Let's Learn SQL through Set Theory! Part 2 Application "
                category="Computer Science and Mathematics Seminar"
                />
                <Summary
                link="https://github.com/beauvilerobed/Lets_learn_sql_webinar_1_and_2"
                title="One of the best ways to really learn about something is having a concrete example (or counter- example) of that something. In this talk we will walkthrough a con- crete example. We will see the ba- sics of SQL in action on a newly designed database  and other awe- some stuff that I won’t speak of at this moment. You’ll just have to come  and see for yourself."
                category="SQL, PHP, Microsoft Office"
                />
        </div>
    </div>
  )
}
 
export default Extra;