import {useEffect, useState } from "react";
import API from "../services/api";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await API.get("/jobs");
        setJobs(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchJobs();
  }, []);

  const applyJob = (id) => {
    console.log("Apply job", id);
  }

  return (
    <div>
      <h1>Jobs</h1>

      {jobs.map((job) => (
        <div key={job.id}>
          <p>{job.title}</p>
          <button onClick={() => applyJob(job.id)}>
            Lamar
          </button>
        </div>
      ))}
    </div>
  );
}
