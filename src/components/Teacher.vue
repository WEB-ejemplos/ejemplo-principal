<template>
  <section>
    <h3>Añadir profesor</h3>

    <div class="card flex justify-content-center">
      <form @submit="onSubmit" class="flex flex-column gap-2">
        <span class="p-float-label">
          <InputText v-model="teacher.teacherName" type="text" />
          <label for="value">Name</label>
        </span>
        <br /><br />
        <span class="p-float-label">
          <InputText v-model="teacher.surname" type="text" />
          <label for="value">Surname</label>
        </span>
        <br /><br />
        <span class="p-float-label">
          <InputText v-model="teacher.dni" type="text" />
          <label for="value">DNI</label>
        </span>
        <br /><br />
        <span class="p-float-label">
          <InputText v-model="subject" type="text" />
          <label for="value">Subject</label>
          <Button icon="pi pi-check" aria-label="Submit" @click="handleSubjects()" />
        </span>

        <OrderList v-model="products" listStyle="height:auto" dataKey="id">
          <template #header> List of Products </template>
          <template #item="slotProps">
            <div class="flex flex-wrap p-2 align-items-center gap-1">
              <div class="flex-1 flex flex-column gap-1">
                <li v-for="(elm, index) in teacher.subjects" :key="index">{{ elm }}</li>
                <div class="flex align-items-center gap-2">
                  <i class="pi pi-tag text-sm"></i>
                  <span>{{ slotProps.item.category }}</span>
                </div>
              </div>
              <span class="font-bold text-900">$ {{ slotProps.item.price }}</span>
            </div>
          </template>
        </OrderList>

        <div>
          <ul>
            <li v-for="(elm, index) in teacher.subjects" :key="index">{{ elm }}</li>
          </ul>
        </div>

        <Checkbox v-model="teacher.doc" :binary="true" />Documentación entregada

        <br /><br />

        <Button type="submit" label="Submit" @click="handleAddTeacher()" />
      </form>
    </div>
  </section>
  <section>
    <h3>Listado de Profesores</h3>
    <table>
      <tr>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th>DNI</th>
        <th>Curso</th>
        <th>Documentación Entregada</th>
      </tr>
      <tr v-for="elm in teachers" :key="elm.dni">
        <th>{{ elm.teacherName }}</th>
        <th>{{ elm.surname }}</th>
        <th>{{ elm.dni }}</th>
        <th>
          <ul>
            <li v-for="(item, index) in elm.subjects" :key="index">{{ item }}</li>
          </ul>
        </th>
        <th v-if="elm.doc">Entregado</th>
        <th v-else>No entregado</th>
      </tr>
    </table>
  </section>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";

interface ITeacher {
  teacherName: string;
  surname: string;
  dni: string;
  subjects: Array<string>;
  doc: boolean;
}

let teacher: Ref<ITeacher> = ref({
  teacherName: "",
  surname: "",
  dni: "",
  subjects: [],
  doc: false,
});

let teachers: Ref<Array<ITeacher>> = ref([]);

let subject: Ref<any> = ref({});

const handleSubjects = () => {
  teacher.value.subjects.push(subject.value);
  subject.value = "";
};

const handleAddTeacher = () => {
  teachers.value.push(teacher.value);
  teacher.value = {
    teacherName: "",
    surname: "",
    dni: "",
    subjects: [],
    doc: false,
  };
};
</script>

<style scoped></style>
