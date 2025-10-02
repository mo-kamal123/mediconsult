import MainHeader from '../../../../shared/UI/main-header';
import NewProviderForm from '../components/new-provider-form';

const NewProvider = () => {
  return (
    <div className="w-[95%] m-auto flex flex-col gap-10">
      <MainHeader>New Provider</MainHeader>
      <NewProviderForm />
    </div>
  );
};

export default NewProvider;
