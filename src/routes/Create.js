import styles from "../css/create_style.module.css";

function Create() {
  return (
    <form>
      <div className={styles.main_page}>
        <div className={styles.main_div}>
          <div className={styles.input_div}>
            <h1 className={styles.input_title}>이름을 알려줘</h1>
            <input className={styles.name_input} type="text"></input>
          </div>
          <div className={styles.input_div}>
            <h1 className={styles.input_title}>암호로 만들 텍스트를 알려줘</h1>
            <input className={styles.text_input} type="text"></input>
          </div>
          <div className={styles.guide_text}>
            이게 뭔지 설명하는 가이드 텍스트 들어갈 자리 근데 얼마나 길지 몰라서
            구냥 아무말 대잔치를 넣어봤어오 오늘 비와서 추울 줄 알고 긴 팔 입고
            나왔는데 하나도 안 춥네 구냥 반팔 입고 나올걸 그랬구먄 로딩 페이지
            어케 만들지 만들 수 있나 근데 난 어케 만드는지 모르는걸 누가
            만들어줬으면 좋겠다 나 졸프도 해야하는디 너모너모 하기 싫으어요 취업
            하고 싶은데 취업 하기 싫으어ㅇ 왠지 4줄 채우고 싶어서 아무거나
            써보기 더 써야대 할 말 없는데 이 정도
          </div>
          <button>변환</button>
        </div>
      </div>
    </form>
  );
}

export default Create;
