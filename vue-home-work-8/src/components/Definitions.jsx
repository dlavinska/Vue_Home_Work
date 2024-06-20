import { Fragment, defineComponent } from "vue";
export default defineComponent({
  name: "DefinitionsList",
  props: {
    data: {
      type: Array,
      default: () => [],
      required: true
    },
  },
  render() {
    return (
      <dl>
        {this.data.map((el) => (
          <Fragment key={el.id}>
            <dt>{el.dt}</dt>
            <dd>{el.dd}</dd>
          </Fragment>
        ))}
      </dl>
    );
  }
});