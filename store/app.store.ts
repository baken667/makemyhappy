import { boolean } from "yup";
import { GenderType } from "~/types/gender.type";

interface StateI {
  _name: string | null;
  _gender: GenderType | null;
  _hiddenForm: boolean;
}

const useAppStore = defineStore("app", {
  state: (): StateI => ({
    _name: null,
    _gender: null,
    _hiddenForm: true,
  }),
  actions: {
    setName(name: string | null) {
      this._name = name;
    },
    setGender(gender: GenderType | null) {
      this._gender = gender;
    },
    setFormVisibilaty(value: boolean) {
      this._hiddenForm = value;
    },
  },
  getters: {
    name: (store): string | null => {
      return store._name;
    },
    gender: (store): GenderType | null => {
      return store._gender;
    },
    hiddenForm: (store): boolean => {
      return store._hiddenForm;
    },
  },
});

export default useAppStore;
