import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Register } from './pages/Register';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Toaster } from 'react-hot-toast';
import { NotFound } from './components/NotFound';
import { UpdateBlogForm } from './components/Profile/UpdateBlogForm';
import { CreateBlogForm } from './components/Profile/CreateBlogForm';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="" element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/profile/blogs/:id/edit"
              element={<UpdateBlogForm />}
            />
            <Route path="/profile/blogs/new" element={<CreateBlogForm />} />
          </Route>
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
