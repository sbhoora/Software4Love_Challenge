import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => (
    <div>
        <Link to="/">Home</Link>
        <Link to="page-2">Page 2</Link>
        <Link to="using-typescript">Typescript</Link>
    </div>
)

export default Navigation