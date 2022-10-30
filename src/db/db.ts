import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database"
import { firebaseConfig } from "../firebaseConfig";

export const firebaseApp = initializeApp(firebaseConfig);

export const database = getDatabase(firebaseApp);

export const writeToDatabase = ( dataArray: BottlingEntry[] ) => {
    set(ref(database, 'test'), {
        logEntries: dataArray
    })
}

const testDBref = ref(database, 'test/logEntries');
/*
  onValue(testDBref, (snapshot) => {
    const data = snapshot.val();
    console.log(`data from DB: ${JSON.stringify(data)}`);
    //console.log(`data[0]: ${data[0].date}`)

    let loadingArray: BottlingEntry[] = [];

    for(let i = 0; i < data.length; i++){
      let entry: BottlingEntry = {
        date:         data[i].date,
        productName:  data[i].productName, 
        abv:          data[i].abv,
        size0qty:     data[i].size0qty,
        size1qty:     data[i].size1qty,
        size2qty:     data[i].size2qty,
        size3qty:     data[i].size3qty,
        size4qty:     data[i].size4qty,
        totalLiters:  data[i].totalLiters,
        totalLAA:     data[i].totalLAA,
        uuid:         data[i].uuid,
        createdAt:    data[i].createdAt,
      }

      loadingArray.push(entry);
    }
    console.log(`we got here boys`);
    //setDBLogEntries( loadingArray => [...loadingArray]);
  })
  */