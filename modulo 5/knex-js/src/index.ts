import connection from "./connection";
import app from "./app"
import { Request, Response } from "express";

//1

const getActorById = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)
  
      return result[0][0]
  }

// a) Explique como é a resposta que temos quando usamos o raw. 

// b) 

getActorById("Glória Pires")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});

//c 

const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count;
  };

  countActors("female")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});

    countActors("male")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});


//2

//a 
const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
      console.log("ok")
  };

  updateActor( "007", 120000);

//b

const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
      console.log("ok")
  }; 

  deleteActor('001');

//c

const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
  };

  avgSalary("male")
  .then(result => {
    console.log(result)
})
.catch(err => {
    console.log(err)
});

//3

//a

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//b

app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await countActors(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

//4

//a

const editSalaryActor = async (id: string, salary:number): Promise<any> => {
    await connection.insert( {id: id , salary: salary,})
   .into("Actor");
 };

  app.put("/actor", async (req: Request, res: Response) => {
    try {
      await editSalaryActor(req.body.id, req.body.salary);
      res.status(200).send({
        message: "Success",
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

//b

app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      await deleteActor(req.params.id);
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });
