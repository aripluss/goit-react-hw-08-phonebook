import { useDispatch } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { getUserDetailsRequest } from 'redux/user/operations';
import Layout from 'layout/Layout/Layout';
import { Loader } from 'components/Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    dispatch(getUserDetailsRequest());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader isPreloader />}>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={'contacts'} element={<ContactsPage />} />
          <Route path={'login'} element={<SignInPage />} />
          <Route path={'register'} element={<SignUpPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
