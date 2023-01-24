import { createConnection } from "typeorm"
let AppMasterConnection:any=[]
let AppSlaveConnection:any=[]
const returnDatabaseValues={
  AppMasterConnection:[],
  AppSlaveConnection:[]

}
export const connectDatabase= async () => {
  try {
    await connectDatabaseMaster()
    await connectDatabaseClient()
  } catch(err) {
    console.log("DB Connection Error: " + err)
  }
}

export const getAllDatabaseConnection=async (database:string)=> {
  if(database==="AppMaster"){
    return AppMasterConnection
  }else if(database==="AppSlave"){
    return AppSlaveConnection;
  }
}

export const connectDatabaseMaster=async ()=>{
  try {
    AppMasterConnection = await createConnection('AppMaster')
    returnDatabaseValues.AppMasterConnection=AppMasterConnection
  }catch(err){
    console.log("DB Connection Error: " + err)
  }
}


export const connectDatabaseClient=async()=>{
  try {
    AppSlaveConnection = await createConnection('AppSlave')
    returnDatabaseValues.AppSlaveConnection=AppSlaveConnection
  }catch(err){
    console.log("DB Connection Error: " + err)
  } 
}
