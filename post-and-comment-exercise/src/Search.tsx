import React, { useState } from 'react'
import { Post } from './Posts';

interface SearchProps {
    message: string;
    posts: Post[];
    onFilter: (theme: string, user: string) => void;
  }

const Search: React.FC<SearchProps> = ({ message, posts, onFilter }) => {

    const [themeInput, setThemeInput] = useState('');
    const [selectedUser, setSelectedUser] = useState('');

    const handleFilterClick = () => {
        onFilter(themeInput, selectedUser);
      };


  return (
    <div className='search-container'>
        <div className='search-theme'>
            <label>Enter theme:</label>
            <input
                type='text'
                value={themeInput}
                onChange={(e) => setThemeInput(e.target.value)}
            />
        </div>

        <div>
        <label>Username:</label>
        <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
          <option value=''>All users</option>
          {Array.from(new Set(posts.map((post) => post.username))).map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>

        <button onClick={handleFilterClick}>Filter</button>

      </div>



    </div>
  )
}

export default Search