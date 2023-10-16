<script setup lang="ts">
import { Form } from "vee-validate";
import { SelectInputOption } from "~/types/select-input-option.type";
import * as yup from "yup";
import useAppStore from "~/store/app.store";

const store = useAppStore();

const genders: SelectInputOption[] = [
  {
    text: "Мужчина",
    value: "male",
  },
  {
    text: "Женщина",
    value: "female",
  },
];

const valdation = yup.object({
  name: yup.string().required("Обязательное поле"),
  gender: yup.string().required("Обязательное поле"),
});

const submit = (values: any) => {
  const name: string = [...values.name]
    .map((char, index) => (index === 0 ? char.toUpperCase() : char))
    .join("");
  store.setName(name);
  store.setGender(values.gender);

  store.setFormVisibilaty(true);
};
</script>
<template>
  <div>
    <ClientOnly>
      <Form
        :initial-values="{
          name: store.name,
          gender: store.gender,
        }"
        :validation-schema="valdation"
        @submit="submit"
      >
        <TextInput name="name" label="Ваше прекрасное имя: " />
        <SelectInput name="gender" label="Ваш пол: " :options="genders" />
        <div class="form-group">
          <button type="submit" class="form-group__button">Сохранить</button>
        </div>
      </Form>
    </ClientOnly>
  </div>
</template>
