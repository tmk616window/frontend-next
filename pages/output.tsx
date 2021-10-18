import { useRouter } from 'next/router';

export default function Output() {
  const router = useRouter();

  return (
      <>
      <br/>
      <br/>
    <div style={{textAlign: "center", marginTop: "50px"}}>
      {/* パラメータの表示 */}
      <h1>input：{router.query.input}</h1>
    </div>
    </>
  )
}
