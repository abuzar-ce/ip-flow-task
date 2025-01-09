import { sslInfo } from "@/lib/ipData";
import React from "react";

const SslInfo = ({ sslyzeipData, loading, error }: any) => {
  // console.log("SSLinfo", JSON.parse(sslyzeipData));
  const parsedData = sslyzeipData && JSON.parse(sslyzeipData);
  // console.log("hahaha", parsedData);
  // console.log("data thaaaaaaaaa", JSON.stringify(parsedData, null, 2));
  // console.log(
  //   "hehehehe",
  //   parsedData?.server_scan_results[0]?.scan_result?.certificate_info?.result
  //     ?.certificate_deployments[0]?.received_certificate_chain[0]
  //     ?.fingerprint_sha256
  // );
  const sha1 =
    parsedData?.server_scan_results[0]?.scan_result?.certificate_info?.result
      ?.certificate_deployments[0]?.received_certificate_chain[0]
      ?.fingerprint_sha256;

  const commonName =
    parsedData?.server_scan_results[0]?.scan_result?.certificate_info?.result
      ?.certificate_deployments[0]?.received_certificate_chain[0]
      ?.subject_alternative_name?.dns_names;

  const issuer =
    parsedData?.server_scan_results[0]?.scan_result?.certificate_info?.result
      ?.certificate_deployments[0]?.received_certificate_chain[0]?.issuer
      ?.attributes?.[
      parsedData?.server_scan_results[0]?.scan_result?.certificate_info?.result
        ?.certificate_deployments[0]?.received_certificate_chain[0]?.issuer
        ?.attributes?.length - 1
    ]?.value;

  const serialNumber =
    parsedData?.server_scan_results[0]?.scan_result?.certificate_info?.result
      ?.certificate_deployments[0]?.received_certificate_chain[0]
      ?.serial_number;

  const notBefore =
    parsedData?.server_scan_results[0]?.scan_result?.certificate_info?.result
      ?.certificate_deployments[0]?.received_certificate_chain[0]
      ?.not_valid_before;

  const notAfter =
    parsedData?.server_scan_results[0]?.scan_result?.certificate_info?.result
      ?.certificate_deployments[0]?.received_certificate_chain[0]
      ?.not_valid_after;

  const publicKey =
    parsedData?.server_scan_results[0]?.scan_result?.certificate_info?.result
      ?.certificate_deployments[0]?.received_certificate_chain[0]?.public_key
      ?.algorithm;

  const signatureAlgorithm =
    parsedData?.server_scan_results[0]?.scan_result?.certificate_info?.result
      ?.certificate_deployments[0]?.received_certificate_chain[0]
      ?.signature_hash_algorithm?.name;

  const keySize =
    parsedData?.server_scan_results[0]?.scan_result?.certificate_info?.result
      ?.certificate_deployments[0]?.received_certificate_chain[0]?.public_key
      ?.key_size;

  const subjectName =
    parsedData?.server_scan_results[0]?.scan_result?.certificate_info?.result
      ?.certificate_deployments[0]?.received_certificate_chain[0]
      ?.subject_alternative_name?.dns_names;
  // console.log("issuer", issuer);

  return (
    <div className="bg-white-bg rounded-2xl overflow-hidden h-auto flex flex-col gap-5">
      <div className="overflow-x-auto ">
        <table className="w-full px-3 ">
          <thead className="w-full px-3  divide-y divide-gray-100">
            <tr>
              <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider ">
                Name
              </th>
              <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider ">
                Values
              </th>
            </tr>
          </thead>
          <tbody className="bg-drawer-bg divide-y divide-gray-100 w-full text-xs">
            <tr className={` bg-drawer-bg border-b`}>
              <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                SHA1 Fingerprint
              </td>
              <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                {sha1}
              </td>
            </tr>
            <tr className={` bg-white border-b`}>
              <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                Common Name
              </td>
              <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                {commonName?.join(", ")}
              </td>
            </tr>
            <tr className={` bg-drawer-bg border-b`}>
              <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                Issuer
              </td>
              <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                {issuer}
              </td>
            </tr>
            <tr className={` bg-white border-b`}>
              <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                Serial Number
              </td>
              <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                {serialNumber}
              </td>
            </tr>
            <tr className={` bg-drawer-bg border-b`}>
              <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                Not Before
              </td>
              <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                {notBefore}
              </td>
            </tr>
            <tr className={` bg-white border-b`}>
              <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                Not After
              </td>
              <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                {notAfter}
              </td>
            </tr>
            <tr className={` bg-drawer-bg border-b`}>
              <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                Public Key Algorithm
              </td>
              <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                {publicKey}
              </td>
            </tr>
            <tr className={` bg-white border-b`}>
              <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                Signature Algorithm
              </td>
              <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                {signatureAlgorithm}
              </td>
            </tr>
            <tr className={` bg-drawer-bg border-b`}>
              <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                Key Size
              </td>
              <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                {keySize}
              </td>
            </tr>
            <tr className={` bg-white border-b`}>
              <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                Subject Name
              </td>
              <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                {subjectName?.join(", ")}
              </td>
            </tr>
          </tbody>
        </table>
        {loading ? (
          <div className="flex justify-center my-10">
            <p className="text-sm ">Loading</p>
          </div>
        ) : (
          ""
        )}
        {error ? (
          <div className="flex justify-center my-10">
            <p className="text-sm ">
              Error in fetching data, for details see logs
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SslInfo;
