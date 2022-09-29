import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { Bucket, BucketEncryption } from "aws-cdk-lib/aws-s3";

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class TypescriptCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

	const bucket = new Bucket(this, 'DocumentsBucket', {
      encryption: BucketEncryption.S3_MANAGED
	});

    new cdk.CfnOutput(this, 'DocumentsBucketNameExport', {
        value: bucket.bucketName,
        exportName: 'DocumentsBucketName'
    });

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'TypescriptCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
