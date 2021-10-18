import { useRouter } from 'next/router';
import {useState} from 'react';

export default function Index() {
  const router = useRouter();           //ルーターの取得
  const [input, setInput] = useState<number>();

  // ボタンをクリックしたときの処理
  const clickButton = () => {
    //未入力の時
    if (!input) {
      return;
    }

    router.push({
        pathname:"/task",   //URL
        query: {id :input} //検索クエリ
      });
  }

  return (
      <>
      <br/>
      <br/>
    <div style={{textAlign: "center", marginTop: "50px"}}>
      {/* 入力項目 */}
      <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)} /*変更時inputに値をセット*/
      />

      {/* ボタン */}
      <button 
        onClick={clickButton}
        disabled={!input}>    {/*入力項目が未入力の場合、非活性*/}
        遷移
      </button>
    </div>
    </>
  )
}

