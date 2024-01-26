import styles from "./addItem.module.css";

export default function AddItem({ func }) {
  return (
    <>
      <div className={styles.addItemDiv}>
        <input
          type="text"
          placeholder="Enter"
          id="input"
          className={styles.input}
          onKeyDown={(e) => {
            console.log(e)
            if (e.key === "Enter") {

              let newItem = e.target.value;
              func(newItem,e);
            }
          }}
        />
        <button className={styles.btn}
          onClick={(e) => {
              let newItem = document.querySelector('#input').value;
              func(newItem,e);
          
          }}
        
        > Add</button>
      </div>
    </>
  );
}
