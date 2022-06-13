import { getModelForClass, prop, ReturnModelType } from "@typegoose/typegoose";

export default class KittenClass {
  @prop()
  public name?: string;

  @prop()
  public species?: string;
  /*
  Or these are also some test comments. For an experiment.
  */

  // the "this" definition is required to have the correct types
  public static async findBySpecies(
    this: ReturnModelType<typeof KittenClass>,
    species: string
  ) {
    return this.find({ species }).exec();
  }
}
// const KittenModel = getModelForClass(KittenClass);

// const docs = async () => {
//   await KittenModel.findBySpecies("SomeSpecies");
// };
