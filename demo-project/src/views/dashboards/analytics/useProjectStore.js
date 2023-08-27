import axios from "axios";
import { defineStore } from "pinia";

export const useProjectStore = defineStore("ProjectStore", {
  state: () => ({
    user: null,
    studentData: [],
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    async fetchData() {
      try {
        const response = await axios.get("/students");
        this.studentData = response.data;
      } catch (error) {
        console.log("Error in fetching", error);
      }
    },

    async editTitle({ student, title }) {
      const foundStudent = this.studentData.find(
        (item) => item.id === student.id
      );

      if (foundStudent) {
        foundStudent.title = title;

        try {
          await axios.put(`students/${student.id}`, {
            title,
          });
        } catch (error) {
          console.error("Error updating title:", error);
        }
      }
    },
    async addRow(newRow) {
      try {
        const response = await axios.post("/students", newRow);

        this.studentData.push(response.data);
      } catch (error) {
        console.error("Error adding row:", error);
      }
    },
  },
});
