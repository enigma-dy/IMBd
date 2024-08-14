import React from "react";
import { useRouter } from "next/router";

const page = () => {
  const router = useRouter();
  const { ref_ } = router.query;

  return (
    <div>
      <h1>Privacy Policy</h1>
      {ref_ && <p>Referred by: {ref_}</p>}
    </div>
  );
};

export default page;
