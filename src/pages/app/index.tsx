import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0"

export default function Home() {

  const { user } = useUser()

  return (
    <div>
      <h1>Hello World</h1>

      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired()

/*
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res)

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}*/