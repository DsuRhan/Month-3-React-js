import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../features/users/usersSlice'
import type { RootState, AppDispatch } from '../app/store'

export default function UserList() {
  const dispatch = useDispatch<AppDispatch>()
  const { list, status, error } = useSelector((state: RootState) => state.users)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers())
    }
  }, [status, dispatch])

  if (status === 'loading') {
    return <p className="text-gray-500 mt-4">Memuat data pengguna...</p>
  }

  if (status === 'failed') {
    return <p className="text-red-500 mt-4">Error: {error}</p>
  }

  return (
    <div className="mt-6 p-4 bg-white rounded shadow w-80">
      <h2 className="text-lg font-semibold mb-2 text-gray-700">Daftar Pengguna</h2>
      <ul className="text-sm text-gray-600 space-y-1">
        {list.map((user) => (
          <li key={user.id} className="border-b border-gray-200 pb-1">
            {user.name} — <span className="text-gray-400">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
