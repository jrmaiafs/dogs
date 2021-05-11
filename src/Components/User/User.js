import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHeader from './UserHeader'
import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import NotFound from '../../NotFound'
import Head from '../Helper/Head'
import UserConta from './UserConta'

const User = () => {
  return (
    <section className="container">
      <Head title="Minha Conta" description="Aqui é sua conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<UserConta />}/>
        <Route path="postar" element={<UserPhotoPost />}/>
        <Route path="estatisticas" element={<UserStats />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </section>
  )
}

export default User
