import React, { Children } from 'react'
import Heading from './components/heading'
import { Section } from './components/Section'
import Counter from './components/counter'
import { useState } from 'react'
import List from './components/List'

export default function App() {
  const [count , setCount] = useState <number>(0)
    
  return (
    <>
    <Heading title={"hello"}/>
    <Section title={"title hu"}>This is section</Section>
    <Counter setCount={setCount} >Count is {count}</Counter>
    <List items={["tea" , "coffee"]} render={ (item:string) => <span className='gold'> {item} </span> } />
    </>
  )
}

