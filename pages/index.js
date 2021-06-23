import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mock API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Quick Mock API for testing purposes</h1>

        <br/>
        <div>
          /api/offer for offers
        </div>
      </main>
    </div>
  )
}
