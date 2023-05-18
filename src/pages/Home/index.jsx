import React from 'react'
import pplList from '../../assets/ppl.json'
import styles from './style.module.css'
import { useState } from 'react'

export default function Home() {
   const [gender, setGender] = useState('all')
   const [age, setAge] = useState('all')
   const [deleted, setDeleted] = useState([])

   const filterByGender = gender === 'all' ? pplList : pplList.filter(p => p.gender === gender)
   const filterByAge = age === 'all' ? filterByGender : filterByGender.filter(p => p.age > Number(age))
   const filterByDelete = filterByAge.filter(p => !deleted.includes(p.id))
   const filteredPplList = filterByDelete

   return (
      <div>
         <div className={styles.container}>
            <h1>our students:</h1>

            <div className={styles.filterBar}>
               <label htmlFor="gender">gender</label>
               <select onChange={e => setGender(e.target.value)} name="gender" id="gender">
                  <option value="all">all</option>
                  <option value="boy">man</option>
                  <option value="girl">woman</option>
               </select>
               <label htmlFor="gender">age</label>
               <select onChange={e => setAge((e.target.value))} name="gender" id="gender">
                  <option value="all">all</option>
                  <option value="20">over 20</option>
                  <option value="30">over 30</option>
                  <option value="40">over 40</option>
               </select>

            </div>


            <ul>
               {filteredPplList.length ? filteredPplList.map(p =>
                  <li key={p.id}>
                     <p className={styles.face}>{p.face}</p>
                     <div>
                        <h3>{p.name}</h3>
                        <p>age: {p.age}</p>
                        <button onClick={() => setDeleted(old => [...old, p.id])}>delete</button>
                     </div>
                  </li>
               )
                  : <p>sorry...  nothing to see here</p>}
            </ul>
         </div>
      </div>
   )
}
