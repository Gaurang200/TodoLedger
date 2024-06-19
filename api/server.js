// 0x0D85F4E6016862942CB91c875A8Aa131ddDAdfce

const express = require('express')
const cors = require("cors")
const tasks = require('./routes/routes')
const app = express();

//user-/api/ethereum/create-task -> server.js -> routes.js -> controller.js -> tasks.js
app.use(cors())
app.use(express.json())
app.use('/api/ethereum', tasks)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server Running At PORT ${PORT}`)
})


// const web3 = new Web3("https://eth-goerli.g.alchemy.com/v2/R5a1q24kZZZBEHSqQZt6qf5rj8HlSysN");
// const contractAddress = "0x0D85F4E6016862942CB91c875A8Aa131ddDAdfce";
// const contract = new web3.eth.Contract(ABI, contractAddress);

// const dateclashCheck = async (taskDate) => {
//     const tasks = await contract.methods.allTask().call();

//     const foundTask = tasks.find(task => taskDate === task.date)

//     if (foundTask) {
//         return foundTask
//     }
//     return "No TAsk Found"

// }


// app.post("/api/ethereum/create-task", async (req, res) => {
//     console.log(req.body);
//     const { taskDate } = req.body
//     const task = await dateclashCheck(taskDate)

//     try {
//         if (task != "No TAsk Found") {
//             res.status(409).json({ status: 409, message: "date clash:task cannot be added" })
//         } else {
//             res.status(200).json({ status: 200, message: "Task can be added" })
//         }

//     } catch (err) {
//         console.log(err);
//     }


// })


// app.get("/api/ethereum/view-task/:taskId", async (req, res) => {

//     try {
//         const { taskId } = req.params;
//         const task = await contract.methods.viewTask(taskId).call()
//         // console.log(task);
//         const { id, name, date } = task;

//         const numId = Number(id);
//         const taskObj = {
//             numId, name, date
//         }
//         res.status(200).json({ status: 200, taskObj, message: "task exist" })
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ status: 500, message: "task does't exist" })

//     }
// })


// app.get("/api/ethereum/view-all-task", async (req, res) => {

//     try {
//         const tasks = await contract.methods.allTask().call();

//         if (tasks.length < 0) {
//             res.status(400).json({ status: 404, taskList, message: "task List doesn't exist" })
//         }

//         if (tasks.length > 0) {
//             const taskList = tasks.map(({ id, name, date }) => {
//                 const numId = Number(id);
//                 return { numId, name, date }
//             })

//             res.status(200).json({ status: 200, taskList, message: "task exist" })
//         }

//     } catch (err) {
//         res.status(500).json({ status: 500, message: "task does't exist" })

//     }
// })


// app.post("/api/ethereum/update-task", async (req, res) => {
//     console.log(req.body);
//     const { taskDate } = req.body
//     const task = await dateclashCheck(taskDate)

//     try {
//         if (task != "No TAsk Found") {
//             res.status(409).json({ status: 409, message: "date clash:task cannot be updated" })
//         } else {
//             res.status(200).json({ status: 200, message: "Task can be updated" })
//         }

//     } catch (err) {
//         console.log(err);
//     }


// })

// const PORT = 5000;

// app.listen(PORT, () => {
//     console.log(`server running`);
// })