import { Router, Request, Response } from "express";
import pool from "./database";

const routes = Router();

// Simple message
routes.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the To-Do List App!");
});


// Applicants - POST endpoint
routes.post("/applicants", async (req: Request, res: Response) => {
    const { applicants } = req.body; // Expect an array of applicants

    if (!Array.isArray(applicants) || applicants.length === 0) {
        res.status(400).json({ error: "Invalid applicant data" });
    }

    try {
        const createdApplicants: any[] = [];
        for (const applicant of applicants) {
            if (typeof applicant.name === "string" && applicant.name.trim() !== "" &&
                typeof applicant.designation === "string" && applicant.designation.trim() !== "" &&
                typeof applicant.imgUrl === "string" && applicant.imgUrl.trim() !== "") {

                const result = await pool.query(
                    "INSERT INTO applicants (name, designation, imgUrl) VALUES ($1, $2, $3) RETURNING *",
                    [applicant.name, applicant.designation, applicant.imgUrl]
                );
                createdApplicants.push(result.rows[0]);
            } else {
                console.warn("Skipped invalid applicant data:", applicant);
            }
        }

        res.status(201).json(createdApplicants);
    } catch (error) {
        console.error("Error adding applicants:", error);
        res.status(500).json({ error: "Error adding applicants" });
    }
});

// Applicants - GET endpoint
routes.get("/applicants", async (req: Request, res: Response) => {
    try {
        const result = await pool.query("SELECT * FROM applicants");
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching applicants:", error);
        res.status(500).json({ error: "Error fetching applicants" });
    }
});

// ---------------------candidatesapi---------------------
// Candidates - POST endpoint
routes.post("/candidates", async (req: Request, res: Response) => {
    const { candidates } = req.body; // Expect an array of candidates

    if (!Array.isArray(candidates) || candidates.length === 0) {
         res.status(400).json({ error: "Invalid candidate data" });
    }

    try {
        const createdCandidates: any[] = [];
        for (const candidate of candidates) {
            if (typeof candidate.role === "string" && candidate.role.trim() !== "" &&
                typeof candidate.count === "number" && candidate.count > 0 &&
                typeof candidate.iconUrl === "string" && candidate.iconUrl.trim() !== "") {

                const result = await pool.query(
                    "INSERT INTO candidates (role, count, iconUrl) VALUES ($1, $2, $3) RETURNING *",
                    [candidate.role, candidate.count, candidate.iconUrl]
                );
                createdCandidates.push(result.rows[0]);
            } else {
                console.warn("Skipped invalid candidate data:", candidate);
            }
        }

        res.status(201).json(createdCandidates);
    } catch (error) {
        console.error("Error adding candidates:", error);
        res.status(500).json({ error: "Error adding candidates" });
    }
});

// Candidates - GET endpoint
routes.get("/candidates", async (req: Request, res: Response) => {
    try {
        const result = await pool.query("SELECT * FROM candidates");
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching candidates:", error);
        res.status(500).json({ error: "Error fetching candidates" });
    }
});

// -----------------recruitment progress api------------
// ProgressData - POST endpoint
routes.post("/progressdata", async (req: Request, res: Response) => {
    const { progressdata } = req.body; // Expect an array of progress data entries

    if (!Array.isArray(progressdata) || progressdata.length === 0) {
         res.status(400).json({ error: "Invalid progress data" });
    }

    try {
        const createdProgressData: any[] = [];
        for (const entry of progressdata) {
            if (typeof entry.name === "string" && entry.name.trim() !== "" &&
                typeof entry.designation === "string" && entry.designation.trim() !== "" &&
                typeof entry.status === "string" && entry.status.trim() !== "") {

                const result = await pool.query(
                    "INSERT INTO progressdata (name, designation, status) VALUES ($1, $2, $3) RETURNING *",
                    [entry.name, entry.designation, entry.status]
                );
                createdProgressData.push(result.rows[0]);
            } else {
                console.warn("Skipped invalid progress data:", entry);
            }
        }

        res.status(201).json(createdProgressData);
    } catch (error) {
        console.error("Error adding progress data:", error);
        res.status(500).json({ error: "Error adding progress data" });
    }
});

// ProgressData - GET endpoint
routes.get("/progressdata", async (req: Request, res: Response) => {
    try {
        const result = await pool.query("SELECT * FROM progressdata");
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching progress data:", error);
        res.status(500).json({ error: "Error fetching progress data" });
    }
});

// -----------------trainingparticipants-------------
// Participants - POST endpoint
routes.post("/participants", async (req: Request, res: Response) => {
    const { participants } = req.body; // Expect an array of participants

    if (!Array.isArray(participants) || participants.length === 0) {
         res.status(400).json({ error: "Invalid participant data" });
    }

    try {
        const createdParticipants: any[] = [];
        for (const participant of participants) {
            if (typeof participant.name === "string" && participant.name.trim() !== "" &&
                typeof participant.imgUrl === "string" && participant.imgUrl.trim() !== "" &&
                typeof participant.job === "string" && participant.job.trim() !== "") {

                const result = await pool.query(
                    "INSERT INTO participants (name, imgUrl, job) VALUES ($1, $2, $3) RETURNING *",
                    [participant.name, participant.imgUrl, participant.job]
                );
                createdParticipants.push(result.rows[0]);
            } else {
                console.warn("Skipped invalid participant data:", participant);
            }
        }

        res.status(201).json(createdParticipants);
    } catch (error) {
        console.error("Error adding participants:", error);
        res.status(500).json({ error: "Error adding participants" });
    }
});

// Participants - GET endpoint
routes.get("/participants", async (req: Request, res: Response) => {
    try {
        const result = await pool.query("SELECT * FROM participants");
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching participants:", error);
        res.status(500).json({ error: "Error fetching participants" });
    }
});


//-----------------all basic codes---------------------------------
// interface Todo {
//     id: number;
//     task: Text; // Assuming the column name is task
//     completed: boolean;
// }

//write this interface Todo immediate-->after the const routes=Router() line
// Get all the tasks route
// routes.get("/todos", async (req: Request, res: Response) => {
//     try {
//         const result = await pool.query("SELECT * FROM todos");
//         const todos: Todo[] = result.rows;
//         res.json(todos);
//     } catch (error) {
//         console.error("Error fetching todos", error);
//         res.status(500).json({ error: "Error fetching todos" });
//     }
// });

// Create task route--->for single task-->post request
// routes.post("/todos", async (req: Request, res: Response)=> {
//     const { task } = req.body;

// Validate task-->for the single task
// if (typeof task !== "string" || task.trim() === "") {
//    res.status(400).json({ error: "Invalid task data" });
// }

//        try {
//         const result = await pool.query(
//             "INSERT INTO todos (task) VALUES ($1) RETURNING *",
//             [task]
//         );
//         const createdTodo: Todo = result.rows[0];
//         res.status(201).json(createdTodo);
//     } catch (error) {
//         console.error("Error adding todo", error);
//         res.status(500).json({ error: "Error adding todo" });
//     }
// });

//for multiple tasks:
// routes.post("/todos", async (req: Request, res: Response) => {
//     const { tasks } = req.body; // Expect an array of tasks

//     // Validate that 'tasks' is an array and contains at least one task
//     if (!Array.isArray(tasks) || tasks.length === 0) {
//          res.status(400).json({ error: "Invalid task data" });
//     }

//     try {
//         const createdTodos: Todo[] = [];
//         for (const task of tasks) {
//             if (typeof task === "string" && task.trim() !== "") {
//                 const result = await pool.query(
//                     "INSERT INTO todos (task) VALUES ($1) RETURNING *",
//                     [task]
//                 );
//                 createdTodos.push(result.rows[0]);
//             }
//         }
//         res.status(201).json(createdTodos);
//     } catch (error) {
//         console.error("Error adding todos", error);
//         res.status(500).json({ error: "Error adding todos" });
//     }
// });


//Delete task route
// routes.delete("/todos/:id", async (req: Request, res: Response) => {
//     const todoID = parseInt(req.params.id, 10);

//     // Validate todoID
//     if (isNaN(todoID)) {
//         res.status(400).json({ error: "Invalid todo ID" });
//     }

//     try {
//         await pool.query("DELETE FROM todos WHERE id = $1", [todoID]);
//         res.sendStatus(200);
//     } catch (error) {
//         console.error("Error deleting todo", error);
//         res.status(500).json({ error: "Error deleting todo" });
//     }
// });

// Update task route
// routes.put("/todos/:id", async (req: Request, res: Response): Promise<void> => {
//     const todoID = parseInt(req.params.id, 10);
//     const { task } = req.body;

//     // Validate task
//     if (typeof task !== "string" || task.trim() === "") {
//         res.status(400).json({ error: "Invalid task data" });
//     }

//     try {
//         const result = await pool.query("UPDATE todos SET task = $1 WHERE id = $2", [
//             task,
//             todoID,
//         ]);

//             // Check if any rows were affected
//             if (result.rowCount === 0) {
//                 res.status(404).json({ error: "Todo not found" });
//             }

//         res.sendStatus(200);
//     } catch (error) {
//         console.error("Error updating todo", error);
//         res.status(500).json({ error: "Error updating todo" });
//     }
// });

export default routes;
