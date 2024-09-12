export default function HomePagePresenter() {
  return (
    <div className="flex flex-col items-start justify-start gap-8">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-black">Dashboard</h1>
        <p className="text-lg text-gray-500">Welcome to TESTDEMO1.</p>
      </div>
    </div>
  );
}

HomePagePresenter.layout = 'AppLayout';
HomePagePresenter.auth = true;
