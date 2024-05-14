(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
  var getHttpHandlerExtensionConfiguration, resolveHttpHandlerRuntimeConfig;
  var init_httpExtensionConfiguration = __esm({
    "node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js"() {
      getHttpHandlerExtensionConfiguration = (runtimeConfig) => {
        let httpHandler = runtimeConfig.httpHandler;
        return {
          setHttpHandler(handler) {
            httpHandler = handler;
          },
          httpHandler() {
            return httpHandler;
          },
          updateHttpClientConfig(key, value) {
            httpHandler.updateHttpClientConfig(key, value);
          },
          httpHandlerConfigs() {
            return httpHandler.httpHandlerConfigs();
          }
        };
      };
      resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
        return {
          httpHandler: httpHandlerExtensionConfiguration.httpHandler()
        };
      };
    }
  });

  // node_modules/@smithy/protocol-http/dist-es/extensions/index.js
  var init_extensions = __esm({
    "node_modules/@smithy/protocol-http/dist-es/extensions/index.js"() {
      init_httpExtensionConfiguration();
    }
  });

  // node_modules/@smithy/types/dist-es/abort.js
  var init_abort = __esm({
    "node_modules/@smithy/types/dist-es/abort.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/auth/auth.js
  var HttpAuthLocation;
  var init_auth = __esm({
    "node_modules/@smithy/types/dist-es/auth/auth.js"() {
      (function(HttpAuthLocation2) {
        HttpAuthLocation2["HEADER"] = "header";
        HttpAuthLocation2["QUERY"] = "query";
      })(HttpAuthLocation || (HttpAuthLocation = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
  var HttpApiKeyAuthLocation;
  var init_HttpApiKeyAuth = __esm({
    "node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js"() {
      (function(HttpApiKeyAuthLocation2) {
        HttpApiKeyAuthLocation2["HEADER"] = "header";
        HttpApiKeyAuthLocation2["QUERY"] = "query";
      })(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js
  var init_HttpAuthScheme = __esm({
    "node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js
  var init_HttpAuthSchemeProvider = __esm({
    "node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/auth/HttpSigner.js
  var init_HttpSigner = __esm({
    "node_modules/@smithy/types/dist-es/auth/HttpSigner.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js
  var init_IdentityProviderConfig = __esm({
    "node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/auth/index.js
  var init_auth2 = __esm({
    "node_modules/@smithy/types/dist-es/auth/index.js"() {
      init_auth();
      init_HttpApiKeyAuth();
      init_HttpAuthScheme();
      init_HttpAuthSchemeProvider();
      init_HttpSigner();
      init_IdentityProviderConfig();
    }
  });

  // node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js
  var init_blob_payload_input_types = __esm({
    "node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/checksum.js
  var init_checksum = __esm({
    "node_modules/@smithy/types/dist-es/checksum.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/client.js
  var init_client = __esm({
    "node_modules/@smithy/types/dist-es/client.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/command.js
  var init_command = __esm({
    "node_modules/@smithy/types/dist-es/command.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/connection/config.js
  var init_config = __esm({
    "node_modules/@smithy/types/dist-es/connection/config.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/connection/manager.js
  var init_manager = __esm({
    "node_modules/@smithy/types/dist-es/connection/manager.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/connection/pool.js
  var init_pool = __esm({
    "node_modules/@smithy/types/dist-es/connection/pool.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/connection/index.js
  var init_connection = __esm({
    "node_modules/@smithy/types/dist-es/connection/index.js"() {
      init_config();
      init_manager();
      init_pool();
    }
  });

  // node_modules/@smithy/types/dist-es/crypto.js
  var init_crypto = __esm({
    "node_modules/@smithy/types/dist-es/crypto.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/encode.js
  var init_encode = __esm({
    "node_modules/@smithy/types/dist-es/encode.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/endpoint.js
  var EndpointURLScheme;
  var init_endpoint = __esm({
    "node_modules/@smithy/types/dist-es/endpoint.js"() {
      (function(EndpointURLScheme2) {
        EndpointURLScheme2["HTTP"] = "http";
        EndpointURLScheme2["HTTPS"] = "https";
      })(EndpointURLScheme || (EndpointURLScheme = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js
  var init_EndpointRuleObject = __esm({
    "node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js
  var init_ErrorRuleObject = __esm({
    "node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js
  var init_RuleSetObject = __esm({
    "node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/endpoints/shared.js
  var init_shared = __esm({
    "node_modules/@smithy/types/dist-es/endpoints/shared.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js
  var init_TreeRuleObject = __esm({
    "node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/endpoints/index.js
  var init_endpoints = __esm({
    "node_modules/@smithy/types/dist-es/endpoints/index.js"() {
      init_EndpointRuleObject();
      init_ErrorRuleObject();
      init_RuleSetObject();
      init_shared();
      init_TreeRuleObject();
    }
  });

  // node_modules/@smithy/types/dist-es/eventStream.js
  var init_eventStream = __esm({
    "node_modules/@smithy/types/dist-es/eventStream.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/extensions/checksum.js
  var AlgorithmId;
  var init_checksum2 = __esm({
    "node_modules/@smithy/types/dist-es/extensions/checksum.js"() {
      (function(AlgorithmId2) {
        AlgorithmId2["MD5"] = "md5";
        AlgorithmId2["CRC32"] = "crc32";
        AlgorithmId2["CRC32C"] = "crc32c";
        AlgorithmId2["SHA1"] = "sha1";
        AlgorithmId2["SHA256"] = "sha256";
      })(AlgorithmId || (AlgorithmId = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js
  var init_defaultClientConfiguration = __esm({
    "node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js"() {
      init_checksum2();
    }
  });

  // node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js
  var init_defaultExtensionConfiguration = __esm({
    "node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/extensions/index.js
  var init_extensions2 = __esm({
    "node_modules/@smithy/types/dist-es/extensions/index.js"() {
      init_defaultClientConfiguration();
      init_defaultExtensionConfiguration();
      init_checksum2();
    }
  });

  // node_modules/@smithy/types/dist-es/http.js
  var FieldPosition;
  var init_http = __esm({
    "node_modules/@smithy/types/dist-es/http.js"() {
      (function(FieldPosition2) {
        FieldPosition2[FieldPosition2["HEADER"] = 0] = "HEADER";
        FieldPosition2[FieldPosition2["TRAILER"] = 1] = "TRAILER";
      })(FieldPosition || (FieldPosition = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js
  var init_httpHandlerInitialization = __esm({
    "node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js
  var init_apiKeyIdentity = __esm({
    "node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js
  var init_awsCredentialIdentity = __esm({
    "node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/identity/identity.js
  var init_identity = __esm({
    "node_modules/@smithy/types/dist-es/identity/identity.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/identity/tokenIdentity.js
  var init_tokenIdentity = __esm({
    "node_modules/@smithy/types/dist-es/identity/tokenIdentity.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/identity/index.js
  var init_identity2 = __esm({
    "node_modules/@smithy/types/dist-es/identity/index.js"() {
      init_apiKeyIdentity();
      init_awsCredentialIdentity();
      init_identity();
      init_tokenIdentity();
    }
  });

  // node_modules/@smithy/types/dist-es/logger.js
  var init_logger = __esm({
    "node_modules/@smithy/types/dist-es/logger.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/middleware.js
  var SMITHY_CONTEXT_KEY;
  var init_middleware = __esm({
    "node_modules/@smithy/types/dist-es/middleware.js"() {
      SMITHY_CONTEXT_KEY = "__smithy_context";
    }
  });

  // node_modules/@smithy/types/dist-es/pagination.js
  var init_pagination = __esm({
    "node_modules/@smithy/types/dist-es/pagination.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/profile.js
  var IniSectionType;
  var init_profile = __esm({
    "node_modules/@smithy/types/dist-es/profile.js"() {
      (function(IniSectionType2) {
        IniSectionType2["PROFILE"] = "profile";
        IniSectionType2["SSO_SESSION"] = "sso-session";
        IniSectionType2["SERVICES"] = "services";
      })(IniSectionType || (IniSectionType = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/response.js
  var init_response = __esm({
    "node_modules/@smithy/types/dist-es/response.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/retry.js
  var init_retry = __esm({
    "node_modules/@smithy/types/dist-es/retry.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/serde.js
  var init_serde = __esm({
    "node_modules/@smithy/types/dist-es/serde.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/shapes.js
  var init_shapes = __esm({
    "node_modules/@smithy/types/dist-es/shapes.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/signature.js
  var init_signature = __esm({
    "node_modules/@smithy/types/dist-es/signature.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/stream.js
  var init_stream = __esm({
    "node_modules/@smithy/types/dist-es/stream.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js
  var init_streaming_blob_common_types = __esm({
    "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js
  var init_streaming_blob_payload_input_types = __esm({
    "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js
  var init_streaming_blob_payload_output_types = __esm({
    "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/transfer.js
  var RequestHandlerProtocol;
  var init_transfer = __esm({
    "node_modules/@smithy/types/dist-es/transfer.js"() {
      (function(RequestHandlerProtocol2) {
        RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
        RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
        RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
      })(RequestHandlerProtocol || (RequestHandlerProtocol = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js
  var init_client_payload_blob_type_narrow = __esm({
    "node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/transform/no-undefined.js
  var init_no_undefined = __esm({
    "node_modules/@smithy/types/dist-es/transform/no-undefined.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/transform/type-transform.js
  var init_type_transform = __esm({
    "node_modules/@smithy/types/dist-es/transform/type-transform.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/uri.js
  var init_uri = __esm({
    "node_modules/@smithy/types/dist-es/uri.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/util.js
  var init_util = __esm({
    "node_modules/@smithy/types/dist-es/util.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/waiter.js
  var init_waiter = __esm({
    "node_modules/@smithy/types/dist-es/waiter.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/index.js
  var init_dist_es = __esm({
    "node_modules/@smithy/types/dist-es/index.js"() {
      init_abort();
      init_auth2();
      init_blob_payload_input_types();
      init_checksum();
      init_client();
      init_command();
      init_connection();
      init_crypto();
      init_encode();
      init_endpoint();
      init_endpoints();
      init_eventStream();
      init_extensions2();
      init_http();
      init_httpHandlerInitialization();
      init_identity2();
      init_logger();
      init_middleware();
      init_pagination();
      init_profile();
      init_response();
      init_retry();
      init_serde();
      init_shapes();
      init_signature();
      init_stream();
      init_streaming_blob_common_types();
      init_streaming_blob_payload_input_types();
      init_streaming_blob_payload_output_types();
      init_transfer();
      init_client_payload_blob_type_narrow();
      init_no_undefined();
      init_type_transform();
      init_uri();
      init_util();
      init_waiter();
    }
  });

  // node_modules/@smithy/protocol-http/dist-es/Field.js
  var init_Field = __esm({
    "node_modules/@smithy/protocol-http/dist-es/Field.js"() {
      init_dist_es();
    }
  });

  // node_modules/@smithy/protocol-http/dist-es/Fields.js
  var init_Fields = __esm({
    "node_modules/@smithy/protocol-http/dist-es/Fields.js"() {
    }
  });

  // node_modules/@smithy/protocol-http/dist-es/httpHandler.js
  var init_httpHandler = __esm({
    "node_modules/@smithy/protocol-http/dist-es/httpHandler.js"() {
    }
  });

  // node_modules/@smithy/protocol-http/dist-es/httpRequest.js
  function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param
      };
    }, {});
  }
  var HttpRequest;
  var init_httpRequest = __esm({
    "node_modules/@smithy/protocol-http/dist-es/httpRequest.js"() {
      HttpRequest = class _HttpRequest {
        constructor(options) {
          this.method = options.method || "GET";
          this.hostname = options.hostname || "localhost";
          this.port = options.port;
          this.query = options.query || {};
          this.headers = options.headers || {};
          this.body = options.body;
          this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
          this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
          this.username = options.username;
          this.password = options.password;
          this.fragment = options.fragment;
        }
        static isInstance(request) {
          if (!request)
            return false;
          const req = request;
          return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
        }
        clone() {
          const cloned = new _HttpRequest({
            ...this,
            headers: { ...this.headers }
          });
          if (cloned.query)
            cloned.query = cloneQuery(cloned.query);
          return cloned;
        }
      };
    }
  });

  // node_modules/@smithy/protocol-http/dist-es/httpResponse.js
  var HttpResponse;
  var init_httpResponse = __esm({
    "node_modules/@smithy/protocol-http/dist-es/httpResponse.js"() {
      HttpResponse = class {
        constructor(options) {
          this.statusCode = options.statusCode;
          this.reason = options.reason;
          this.headers = options.headers || {};
          this.body = options.body;
        }
        static isInstance(response) {
          if (!response)
            return false;
          const resp = response;
          return typeof resp.statusCode === "number" && typeof resp.headers === "object";
        }
      };
    }
  });

  // node_modules/@smithy/protocol-http/dist-es/isValidHostname.js
  var init_isValidHostname = __esm({
    "node_modules/@smithy/protocol-http/dist-es/isValidHostname.js"() {
    }
  });

  // node_modules/@smithy/protocol-http/dist-es/types.js
  var init_types = __esm({
    "node_modules/@smithy/protocol-http/dist-es/types.js"() {
    }
  });

  // node_modules/@smithy/protocol-http/dist-es/index.js
  var init_dist_es2 = __esm({
    "node_modules/@smithy/protocol-http/dist-es/index.js"() {
      init_extensions();
      init_Field();
      init_Fields();
      init_httpHandler();
      init_httpRequest();
      init_httpResponse();
      init_isValidHostname();
      init_types();
    }
  });

  // node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
  function resolveHostHeaderConfig(input) {
    return input;
  }
  var hostHeaderMiddleware, hostHeaderMiddlewareOptions, getHostHeaderPlugin;
  var init_dist_es3 = __esm({
    "node_modules/@aws-sdk/middleware-host-header/dist-es/index.js"() {
      init_dist_es2();
      hostHeaderMiddleware = (options) => (next) => async (args) => {
        if (!HttpRequest.isInstance(args.request))
          return next(args);
        const { request } = args;
        const { handlerProtocol = "" } = options.requestHandler.metadata || {};
        if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
          delete request.headers["host"];
          request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
        } else if (!request.headers["host"]) {
          let host = request.hostname;
          if (request.port != null)
            host += `:${request.port}`;
          request.headers["host"] = host;
        }
        return next(args);
      };
      hostHeaderMiddlewareOptions = {
        name: "hostHeaderMiddleware",
        step: "build",
        priority: "low",
        tags: ["HOST"],
        override: true
      };
      getHostHeaderPlugin = (options) => ({
        applyToStack: (clientStack) => {
          clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
        }
      });
    }
  });

  // node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
  var loggerMiddleware, loggerMiddlewareOptions, getLoggerPlugin;
  var init_loggerMiddleware = __esm({
    "node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js"() {
      loggerMiddleware = () => (next, context) => async (args) => {
        try {
          const response = await next(args);
          const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
          const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
          const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
          const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
          const { $metadata, ...outputWithoutMetadata } = response.output;
          logger2?.info?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            output: outputFilterSensitiveLog(outputWithoutMetadata),
            metadata: $metadata
          });
          return response;
        } catch (error) {
          const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
          const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
          const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
          logger2?.error?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            error,
            metadata: error.$metadata
          });
          throw error;
        }
      };
      loggerMiddlewareOptions = {
        name: "loggerMiddleware",
        tags: ["LOGGER"],
        step: "initialize",
        override: true
      };
      getLoggerPlugin = (options) => ({
        applyToStack: (clientStack) => {
          clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
        }
      });
    }
  });

  // node_modules/@aws-sdk/middleware-logger/dist-es/index.js
  var init_dist_es4 = __esm({
    "node_modules/@aws-sdk/middleware-logger/dist-es/index.js"() {
      init_loggerMiddleware();
    }
  });

  // node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js
  var TRACE_ID_HEADER_NAME, ENV_LAMBDA_FUNCTION_NAME, ENV_TRACE_ID, recursionDetectionMiddleware, addRecursionDetectionMiddlewareOptions, getRecursionDetectionPlugin;
  var init_dist_es5 = __esm({
    "node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js"() {
      init_dist_es2();
      TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
      ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
      ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
      recursionDetectionMiddleware = (options) => (next) => async (args) => {
        const { request } = args;
        if (!HttpRequest.isInstance(request) || options.runtime !== "node" || request.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {
          return next(args);
        }
        const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
        const traceId = process.env[ENV_TRACE_ID];
        const nonEmptyString = (str) => typeof str === "string" && str.length > 0;
        if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
          request.headers[TRACE_ID_HEADER_NAME] = traceId;
        }
        return next({
          ...args,
          request
        });
      };
      addRecursionDetectionMiddlewareOptions = {
        step: "build",
        tags: ["RECURSION_DETECTION"],
        name: "recursionDetectionMiddleware",
        override: true,
        priority: "low"
      };
      getRecursionDetectionPlugin = (options) => ({
        applyToStack: (clientStack) => {
          clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
        }
      });
    }
  });

  // node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
  function resolveUserAgentConfig(input) {
    return {
      ...input,
      customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent
    };
  }
  var init_configurations = __esm({
    "node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js"() {
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js
  var IP_V4_REGEX, isIpAddress;
  var init_isIpAddress = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js"() {
      IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
      isIpAddress = (value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]");
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js
  var VALID_HOST_LABEL_REGEX, isValidHostLabel;
  var init_isValidHostLabel = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js"() {
      VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
      isValidHostLabel = (value, allowSubDomains = false) => {
        if (!allowSubDomains) {
          return VALID_HOST_LABEL_REGEX.test(value);
        }
        const labels = value.split(".");
        for (const label of labels) {
          if (!isValidHostLabel(label)) {
            return false;
          }
        }
        return true;
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js
  var customEndpointFunctions;
  var init_customEndpointFunctions = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js"() {
      customEndpointFunctions = {};
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js
  var debugId;
  var init_debugId = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js"() {
      debugId = "endpoints";
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js
  function toDebugString(input) {
    if (typeof input !== "object" || input == null) {
      return input;
    }
    if ("ref" in input) {
      return `$${toDebugString(input.ref)}`;
    }
    if ("fn" in input) {
      return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
    }
    return JSON.stringify(input, null, 2);
  }
  var init_toDebugString = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js"() {
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/debug/index.js
  var init_debug = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/debug/index.js"() {
      init_debugId();
      init_toDebugString();
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js
  var EndpointError;
  var init_EndpointError = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js"() {
      EndpointError = class extends Error {
        constructor(message) {
          super(message);
          this.name = "EndpointError";
        }
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js
  var init_EndpointFunctions = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js"() {
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js
  var init_EndpointRuleObject2 = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js"() {
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js
  var init_ErrorRuleObject2 = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js"() {
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js
  var init_RuleSetObject2 = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js"() {
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js
  var init_TreeRuleObject2 = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js"() {
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/types/shared.js
  var init_shared2 = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/types/shared.js"() {
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/types/index.js
  var init_types2 = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/types/index.js"() {
      init_EndpointError();
      init_EndpointFunctions();
      init_EndpointRuleObject2();
      init_ErrorRuleObject2();
      init_RuleSetObject2();
      init_TreeRuleObject2();
      init_shared2();
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js
  var booleanEquals;
  var init_booleanEquals = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js"() {
      booleanEquals = (value1, value2) => value1 === value2;
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js
  var getAttrPathList;
  var init_getAttrPathList = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js"() {
      init_types2();
      getAttrPathList = (path) => {
        const parts = path.split(".");
        const pathList = [];
        for (const part of parts) {
          const squareBracketIndex = part.indexOf("[");
          if (squareBracketIndex !== -1) {
            if (part.indexOf("]") !== part.length - 1) {
              throw new EndpointError(`Path: '${path}' does not end with ']'`);
            }
            const arrayIndex = part.slice(squareBracketIndex + 1, -1);
            if (Number.isNaN(parseInt(arrayIndex))) {
              throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
            }
            if (squareBracketIndex !== 0) {
              pathList.push(part.slice(0, squareBracketIndex));
            }
            pathList.push(arrayIndex);
          } else {
            pathList.push(part);
          }
        }
        return pathList;
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js
  var getAttr;
  var init_getAttr = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js"() {
      init_types2();
      init_getAttrPathList();
      getAttr = (value, path) => getAttrPathList(path).reduce((acc, index) => {
        if (typeof acc !== "object") {
          throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
        } else if (Array.isArray(acc)) {
          return acc[parseInt(index)];
        }
        return acc[index];
      }, value);
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js
  var isSet;
  var init_isSet = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js"() {
      isSet = (value) => value != null;
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/not.js
  var not;
  var init_not = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/not.js"() {
      not = (value) => !value;
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js
  var DEFAULT_PORTS, parseURL;
  var init_parseURL = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js"() {
      init_dist_es();
      init_isIpAddress();
      DEFAULT_PORTS = {
        [EndpointURLScheme.HTTP]: 80,
        [EndpointURLScheme.HTTPS]: 443
      };
      parseURL = (value) => {
        const whatwgURL = (() => {
          try {
            if (value instanceof URL) {
              return value;
            }
            if (typeof value === "object" && "hostname" in value) {
              const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
              const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
              url.search = Object.entries(query).map(([k3, v3]) => `${k3}=${v3}`).join("&");
              return url;
            }
            return new URL(value);
          } catch (error) {
            return null;
          }
        })();
        if (!whatwgURL) {
          console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
          return null;
        }
        const urlString = whatwgURL.href;
        const { host, hostname, pathname, protocol, search } = whatwgURL;
        if (search) {
          return null;
        }
        const scheme = protocol.slice(0, -1);
        if (!Object.values(EndpointURLScheme).includes(scheme)) {
          return null;
        }
        const isIp = isIpAddress(hostname);
        const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
        const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
        return {
          scheme,
          authority,
          path: pathname,
          normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
          isIp
        };
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js
  var stringEquals;
  var init_stringEquals = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js"() {
      stringEquals = (value1, value2) => value1 === value2;
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/substring.js
  var substring;
  var init_substring = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/substring.js"() {
      substring = (input, start, stop, reverse) => {
        if (start >= stop || input.length < stop) {
          return null;
        }
        if (!reverse) {
          return input.substring(start, stop);
        }
        return input.substring(input.length - stop, input.length - start);
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js
  var uriEncode;
  var init_uriEncode = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js"() {
      uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c3) => `%${c3.charCodeAt(0).toString(16).toUpperCase()}`);
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/index.js
  var init_lib = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/index.js"() {
      init_booleanEquals();
      init_getAttr();
      init_isSet();
      init_isValidHostLabel();
      init_not();
      init_parseURL();
      init_stringEquals();
      init_substring();
      init_uriEncode();
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js
  var endpointFunctions;
  var init_endpointFunctions = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js"() {
      init_lib();
      endpointFunctions = {
        booleanEquals,
        getAttr,
        isSet,
        isValidHostLabel,
        not,
        parseURL,
        stringEquals,
        substring,
        uriEncode
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js
  var evaluateTemplate;
  var init_evaluateTemplate = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js"() {
      init_lib();
      evaluateTemplate = (template, options) => {
        const evaluatedTemplateArr = [];
        const templateContext = {
          ...options.endpointParams,
          ...options.referenceRecord
        };
        let currentIndex = 0;
        while (currentIndex < template.length) {
          const openingBraceIndex = template.indexOf("{", currentIndex);
          if (openingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(currentIndex));
            break;
          }
          evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
          const closingBraceIndex = template.indexOf("}", openingBraceIndex);
          if (closingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex));
            break;
          }
          if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
            currentIndex = closingBraceIndex + 2;
          }
          const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
          if (parameterName.includes("#")) {
            const [refName, attrName] = parameterName.split("#");
            evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
          } else {
            evaluatedTemplateArr.push(templateContext[parameterName]);
          }
          currentIndex = closingBraceIndex + 1;
        }
        return evaluatedTemplateArr.join("");
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js
  var getReferenceValue;
  var init_getReferenceValue = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js"() {
      getReferenceValue = ({ ref }, options) => {
        const referenceRecord = {
          ...options.endpointParams,
          ...options.referenceRecord
        };
        return referenceRecord[ref];
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js
  var evaluateExpression;
  var init_evaluateExpression = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js"() {
      init_types2();
      init_callFunction();
      init_evaluateTemplate();
      init_getReferenceValue();
      evaluateExpression = (obj, keyName, options) => {
        if (typeof obj === "string") {
          return evaluateTemplate(obj, options);
        } else if (obj["fn"]) {
          return callFunction(obj, options);
        } else if (obj["ref"]) {
          return getReferenceValue(obj, options);
        }
        throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js
  var callFunction;
  var init_callFunction = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js"() {
      init_customEndpointFunctions();
      init_endpointFunctions();
      init_evaluateExpression();
      callFunction = ({ fn, argv }, options) => {
        const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options));
        const fnSegments = fn.split(".");
        if (fnSegments[0] in customEndpointFunctions && fnSegments[1] != null) {
          return customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
        }
        return endpointFunctions[fn](...evaluatedArgs);
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js
  var evaluateCondition;
  var init_evaluateCondition = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js"() {
      init_debug();
      init_types2();
      init_callFunction();
      evaluateCondition = ({ assign, ...fnArgs }, options) => {
        if (assign && assign in options.referenceRecord) {
          throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
        }
        const value = callFunction(fnArgs, options);
        options.logger?.debug?.(debugId, `evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
        return {
          result: value === "" ? true : !!value,
          ...assign != null && { toAssign: { name: assign, value } }
        };
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js
  var evaluateConditions;
  var init_evaluateConditions = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js"() {
      init_debug();
      init_evaluateCondition();
      evaluateConditions = (conditions = [], options) => {
        const conditionsReferenceRecord = {};
        for (const condition of conditions) {
          const { result, toAssign } = evaluateCondition(condition, {
            ...options,
            referenceRecord: {
              ...options.referenceRecord,
              ...conditionsReferenceRecord
            }
          });
          if (!result) {
            return { result };
          }
          if (toAssign) {
            conditionsReferenceRecord[toAssign.name] = toAssign.value;
            options.logger?.debug?.(debugId, `assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
          }
        }
        return { result: true, referenceRecord: conditionsReferenceRecord };
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js
  var getEndpointHeaders;
  var init_getEndpointHeaders = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js"() {
      init_types2();
      init_evaluateExpression();
      getEndpointHeaders = (headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
        ...acc,
        [headerKey]: headerVal.map((headerValEntry) => {
          const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
          if (typeof processedExpr !== "string") {
            throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
          }
          return processedExpr;
        })
      }), {});
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js
  var getEndpointProperty;
  var init_getEndpointProperty = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js"() {
      init_types2();
      init_evaluateTemplate();
      init_getEndpointProperties();
      getEndpointProperty = (property, options) => {
        if (Array.isArray(property)) {
          return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
        }
        switch (typeof property) {
          case "string":
            return evaluateTemplate(property, options);
          case "object":
            if (property === null) {
              throw new EndpointError(`Unexpected endpoint property: ${property}`);
            }
            return getEndpointProperties(property, options);
          case "boolean":
            return property;
          default:
            throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
        }
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js
  var getEndpointProperties;
  var init_getEndpointProperties = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js"() {
      init_getEndpointProperty();
      getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
        ...acc,
        [propertyKey]: getEndpointProperty(propertyVal, options)
      }), {});
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js
  var getEndpointUrl;
  var init_getEndpointUrl = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js"() {
      init_types2();
      init_evaluateExpression();
      getEndpointUrl = (endpointUrl, options) => {
        const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
        if (typeof expression === "string") {
          try {
            return new URL(expression);
          } catch (error) {
            console.error(`Failed to construct URL with ${expression}`, error);
            throw error;
          }
        }
        throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js
  var evaluateEndpointRule;
  var init_evaluateEndpointRule = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js"() {
      init_debug();
      init_evaluateConditions();
      init_getEndpointHeaders();
      init_getEndpointProperties();
      init_getEndpointUrl();
      evaluateEndpointRule = (endpointRule, options) => {
        const { conditions, endpoint } = endpointRule;
        const { result, referenceRecord } = evaluateConditions(conditions, options);
        if (!result) {
          return;
        }
        const endpointRuleOptions = {
          ...options,
          referenceRecord: { ...options.referenceRecord, ...referenceRecord }
        };
        const { url, properties, headers } = endpoint;
        options.logger?.debug?.(debugId, `Resolving endpoint from template: ${toDebugString(endpoint)}`);
        return {
          ...headers != void 0 && {
            headers: getEndpointHeaders(headers, endpointRuleOptions)
          },
          ...properties != void 0 && {
            properties: getEndpointProperties(properties, endpointRuleOptions)
          },
          url: getEndpointUrl(url, endpointRuleOptions)
        };
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js
  var evaluateErrorRule;
  var init_evaluateErrorRule = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js"() {
      init_types2();
      init_evaluateConditions();
      init_evaluateExpression();
      evaluateErrorRule = (errorRule, options) => {
        const { conditions, error } = errorRule;
        const { result, referenceRecord } = evaluateConditions(conditions, options);
        if (!result) {
          return;
        }
        throw new EndpointError(evaluateExpression(error, "Error", {
          ...options,
          referenceRecord: { ...options.referenceRecord, ...referenceRecord }
        }));
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js
  var evaluateTreeRule;
  var init_evaluateTreeRule = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js"() {
      init_evaluateConditions();
      init_evaluateRules();
      evaluateTreeRule = (treeRule, options) => {
        const { conditions, rules } = treeRule;
        const { result, referenceRecord } = evaluateConditions(conditions, options);
        if (!result) {
          return;
        }
        return evaluateRules(rules, {
          ...options,
          referenceRecord: { ...options.referenceRecord, ...referenceRecord }
        });
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js
  var evaluateRules;
  var init_evaluateRules = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js"() {
      init_types2();
      init_evaluateEndpointRule();
      init_evaluateErrorRule();
      init_evaluateTreeRule();
      evaluateRules = (rules, options) => {
        for (const rule of rules) {
          if (rule.type === "endpoint") {
            const endpointOrUndefined = evaluateEndpointRule(rule, options);
            if (endpointOrUndefined) {
              return endpointOrUndefined;
            }
          } else if (rule.type === "error") {
            evaluateErrorRule(rule, options);
          } else if (rule.type === "tree") {
            const endpointOrUndefined = evaluateTreeRule(rule, options);
            if (endpointOrUndefined) {
              return endpointOrUndefined;
            }
          } else {
            throw new EndpointError(`Unknown endpoint rule: ${rule}`);
          }
        }
        throw new EndpointError(`Rules evaluation failed`);
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/index.js
  var init_utils = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/index.js"() {
      init_customEndpointFunctions();
      init_evaluateRules();
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js
  var resolveEndpoint;
  var init_resolveEndpoint = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js"() {
      init_debug();
      init_types2();
      init_utils();
      resolveEndpoint = (ruleSetObject, options) => {
        const { endpointParams, logger: logger2 } = options;
        const { parameters, rules } = ruleSetObject;
        options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
        const paramsWithDefault = Object.entries(parameters).filter(([, v3]) => v3.default != null).map(([k3, v3]) => [k3, v3.default]);
        if (paramsWithDefault.length > 0) {
          for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
            endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
          }
        }
        const requiredParams = Object.entries(parameters).filter(([, v3]) => v3.required).map(([k3]) => k3);
        for (const requiredParam of requiredParams) {
          if (endpointParams[requiredParam] == null) {
            throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
          }
        }
        const endpoint = evaluateRules(rules, { endpointParams, logger: logger2, referenceRecord: {} });
        if (options.endpointParams?.Endpoint) {
          try {
            const givenEndpoint = new URL(options.endpointParams.Endpoint);
            const { protocol, port } = givenEndpoint;
            endpoint.url.protocol = protocol;
            endpoint.url.port = port;
          } catch (e3) {
          }
        }
        options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
        return endpoint;
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/index.js
  var init_dist_es6 = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/index.js"() {
      init_isIpAddress();
      init_isValidHostLabel();
      init_customEndpointFunctions();
      init_resolveEndpoint();
      init_types2();
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js
  var init_isIpAddress2 = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js"() {
      init_dist_es6();
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
  var isVirtualHostableS3Bucket;
  var init_isVirtualHostableS3Bucket = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js"() {
      init_dist_es6();
      init_isIpAddress2();
      isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
        if (allowSubDomains) {
          for (const label of value.split(".")) {
            if (!isVirtualHostableS3Bucket(label)) {
              return false;
            }
          }
          return true;
        }
        if (!isValidHostLabel(value)) {
          return false;
        }
        if (value.length < 3 || value.length > 63) {
          return false;
        }
        if (value !== value.toLowerCase()) {
          return false;
        }
        if (isIpAddress(value)) {
          return false;
        }
        return true;
      };
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
  var parseArn;
  var init_parseArn = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js"() {
      parseArn = (value) => {
        const segments = value.split(":");
        if (segments.length < 6)
          return null;
        const [arn, partition2, service, region, accountId, ...resourceId] = segments;
        if (arn !== "arn" || partition2 === "" || service === "" || resourceId[0] === "")
          return null;
        return {
          partition: partition2,
          service,
          region,
          accountId,
          resourceId: resourceId[0].includes("/") ? resourceId[0].split("/") : resourceId
        };
      };
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
  var partitions_default;
  var init_partitions = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json"() {
      partitions_default = {
        partitions: [{
          id: "aws",
          outputs: {
            dnsSuffix: "amazonaws.com",
            dualStackDnsSuffix: "api.aws",
            implicitGlobalRegion: "us-east-1",
            name: "aws",
            supportsDualStack: true,
            supportsFIPS: true
          },
          regionRegex: "^(us|eu|ap|sa|ca|me|af|il)\\-\\w+\\-\\d+$",
          regions: {
            "af-south-1": {
              description: "Africa (Cape Town)"
            },
            "ap-east-1": {
              description: "Asia Pacific (Hong Kong)"
            },
            "ap-northeast-1": {
              description: "Asia Pacific (Tokyo)"
            },
            "ap-northeast-2": {
              description: "Asia Pacific (Seoul)"
            },
            "ap-northeast-3": {
              description: "Asia Pacific (Osaka)"
            },
            "ap-south-1": {
              description: "Asia Pacific (Mumbai)"
            },
            "ap-south-2": {
              description: "Asia Pacific (Hyderabad)"
            },
            "ap-southeast-1": {
              description: "Asia Pacific (Singapore)"
            },
            "ap-southeast-2": {
              description: "Asia Pacific (Sydney)"
            },
            "ap-southeast-3": {
              description: "Asia Pacific (Jakarta)"
            },
            "ap-southeast-4": {
              description: "Asia Pacific (Melbourne)"
            },
            "aws-global": {
              description: "AWS Standard global region"
            },
            "ca-central-1": {
              description: "Canada (Central)"
            },
            "ca-west-1": {
              description: "Canada West (Calgary)"
            },
            "eu-central-1": {
              description: "Europe (Frankfurt)"
            },
            "eu-central-2": {
              description: "Europe (Zurich)"
            },
            "eu-north-1": {
              description: "Europe (Stockholm)"
            },
            "eu-south-1": {
              description: "Europe (Milan)"
            },
            "eu-south-2": {
              description: "Europe (Spain)"
            },
            "eu-west-1": {
              description: "Europe (Ireland)"
            },
            "eu-west-2": {
              description: "Europe (London)"
            },
            "eu-west-3": {
              description: "Europe (Paris)"
            },
            "il-central-1": {
              description: "Israel (Tel Aviv)"
            },
            "me-central-1": {
              description: "Middle East (UAE)"
            },
            "me-south-1": {
              description: "Middle East (Bahrain)"
            },
            "sa-east-1": {
              description: "South America (Sao Paulo)"
            },
            "us-east-1": {
              description: "US East (N. Virginia)"
            },
            "us-east-2": {
              description: "US East (Ohio)"
            },
            "us-west-1": {
              description: "US West (N. California)"
            },
            "us-west-2": {
              description: "US West (Oregon)"
            }
          }
        }, {
          id: "aws-cn",
          outputs: {
            dnsSuffix: "amazonaws.com.cn",
            dualStackDnsSuffix: "api.amazonwebservices.com.cn",
            implicitGlobalRegion: "cn-northwest-1",
            name: "aws-cn",
            supportsDualStack: true,
            supportsFIPS: true
          },
          regionRegex: "^cn\\-\\w+\\-\\d+$",
          regions: {
            "aws-cn-global": {
              description: "AWS China global region"
            },
            "cn-north-1": {
              description: "China (Beijing)"
            },
            "cn-northwest-1": {
              description: "China (Ningxia)"
            }
          }
        }, {
          id: "aws-us-gov",
          outputs: {
            dnsSuffix: "amazonaws.com",
            dualStackDnsSuffix: "api.aws",
            implicitGlobalRegion: "us-gov-west-1",
            name: "aws-us-gov",
            supportsDualStack: true,
            supportsFIPS: true
          },
          regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
          regions: {
            "aws-us-gov-global": {
              description: "AWS GovCloud (US) global region"
            },
            "us-gov-east-1": {
              description: "AWS GovCloud (US-East)"
            },
            "us-gov-west-1": {
              description: "AWS GovCloud (US-West)"
            }
          }
        }, {
          id: "aws-iso",
          outputs: {
            dnsSuffix: "c2s.ic.gov",
            dualStackDnsSuffix: "c2s.ic.gov",
            implicitGlobalRegion: "us-iso-east-1",
            name: "aws-iso",
            supportsDualStack: false,
            supportsFIPS: true
          },
          regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
          regions: {
            "aws-iso-global": {
              description: "AWS ISO (US) global region"
            },
            "us-iso-east-1": {
              description: "US ISO East"
            },
            "us-iso-west-1": {
              description: "US ISO WEST"
            }
          }
        }, {
          id: "aws-iso-b",
          outputs: {
            dnsSuffix: "sc2s.sgov.gov",
            dualStackDnsSuffix: "sc2s.sgov.gov",
            implicitGlobalRegion: "us-isob-east-1",
            name: "aws-iso-b",
            supportsDualStack: false,
            supportsFIPS: true
          },
          regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
          regions: {
            "aws-iso-b-global": {
              description: "AWS ISOB (US) global region"
            },
            "us-isob-east-1": {
              description: "US ISOB East (Ohio)"
            }
          }
        }, {
          id: "aws-iso-e",
          outputs: {
            dnsSuffix: "cloud.adc-e.uk",
            dualStackDnsSuffix: "cloud.adc-e.uk",
            implicitGlobalRegion: "eu-isoe-west-1",
            name: "aws-iso-e",
            supportsDualStack: false,
            supportsFIPS: true
          },
          regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
          regions: {}
        }, {
          id: "aws-iso-f",
          outputs: {
            dnsSuffix: "csp.hci.ic.gov",
            dualStackDnsSuffix: "csp.hci.ic.gov",
            implicitGlobalRegion: "us-isof-south-1",
            name: "aws-iso-f",
            supportsDualStack: false,
            supportsFIPS: true
          },
          regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
          regions: {}
        }],
        version: "1.1"
      };
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
  var selectedPartitionsInfo, selectedUserAgentPrefix, partition, getUserAgentPrefix;
  var init_partition = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js"() {
      init_partitions();
      selectedPartitionsInfo = partitions_default;
      selectedUserAgentPrefix = "";
      partition = (value) => {
        const { partitions } = selectedPartitionsInfo;
        for (const partition2 of partitions) {
          const { regions, outputs } = partition2;
          for (const [region, regionData] of Object.entries(regions)) {
            if (region === value) {
              return {
                ...outputs,
                ...regionData
              };
            }
          }
        }
        for (const partition2 of partitions) {
          const { regionRegex, outputs } = partition2;
          if (new RegExp(regionRegex).test(value)) {
            return {
              ...outputs
            };
          }
        }
        const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
        if (!DEFAULT_PARTITION) {
          throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
        }
        return {
          ...DEFAULT_PARTITION.outputs
        };
      };
      getUserAgentPrefix = () => selectedUserAgentPrefix;
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/aws.js
  var awsEndpointFunctions;
  var init_aws = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/aws.js"() {
      init_dist_es6();
      init_isVirtualHostableS3Bucket();
      init_parseArn();
      init_partition();
      awsEndpointFunctions = {
        isVirtualHostableS3Bucket,
        parseArn,
        partition
      };
      customEndpointFunctions.aws = awsEndpointFunctions;
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js
  var init_resolveEndpoint2 = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js"() {
      init_dist_es6();
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js
  var init_EndpointError2 = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js"() {
      init_dist_es6();
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js
  var init_EndpointRuleObject3 = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js"() {
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js
  var init_ErrorRuleObject3 = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js"() {
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js
  var init_RuleSetObject3 = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js"() {
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js
  var init_TreeRuleObject3 = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js"() {
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js
  var init_shared3 = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js"() {
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js
  var init_types3 = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js"() {
      init_EndpointError2();
      init_EndpointRuleObject3();
      init_ErrorRuleObject3();
      init_RuleSetObject3();
      init_TreeRuleObject3();
      init_shared3();
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/index.js
  var init_dist_es7 = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/index.js"() {
      init_aws();
      init_partition();
      init_isIpAddress2();
      init_resolveEndpoint2();
      init_types3();
    }
  });

  // node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
  var USER_AGENT, X_AMZ_USER_AGENT, SPACE, UA_NAME_SEPARATOR, UA_NAME_ESCAPE_REGEX, UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR;
  var init_constants = __esm({
    "node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js"() {
      USER_AGENT = "user-agent";
      X_AMZ_USER_AGENT = "x-amz-user-agent";
      SPACE = " ";
      UA_NAME_SEPARATOR = "/";
      UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
      UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
      UA_ESCAPE_CHAR = "-";
    }
  });

  // node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
  var userAgentMiddleware, escapeUserAgent, getUserAgentMiddlewareOptions, getUserAgentPlugin;
  var init_user_agent_middleware = __esm({
    "node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js"() {
      init_dist_es7();
      init_dist_es2();
      init_constants();
      userAgentMiddleware = (options) => (next, context) => async (args) => {
        const { request } = args;
        if (!HttpRequest.isInstance(request))
          return next(args);
        const { headers } = request;
        const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
        const defaultUserAgent2 = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
        const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
        const prefix = getUserAgentPrefix();
        const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent2, ...userAgent, ...customUserAgent]).join(SPACE);
        const normalUAValue = [
          ...defaultUserAgent2.filter((section) => section.startsWith("aws-sdk-")),
          ...customUserAgent
        ].join(SPACE);
        if (options.runtime !== "browser") {
          if (normalUAValue) {
            headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
          }
          headers[USER_AGENT] = sdkUserAgentValue;
        } else {
          headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
        }
        return next({
          ...args,
          request
        });
      };
      escapeUserAgent = (userAgentPair) => {
        const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
        const version = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
        const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
        const prefix = name.substring(0, prefixSeparatorIndex);
        let uaName = name.substring(prefixSeparatorIndex + 1);
        if (prefix === "api") {
          uaName = uaName.toLowerCase();
        }
        return [prefix, uaName, version].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
          switch (index) {
            case 0:
              return item;
            case 1:
              return `${acc}/${item}`;
            default:
              return `${acc}#${item}`;
          }
        }, "");
      };
      getUserAgentMiddlewareOptions = {
        name: "getUserAgentMiddleware",
        step: "build",
        priority: "low",
        tags: ["SET_USER_AGENT", "USER_AGENT"],
        override: true
      };
      getUserAgentPlugin = (config) => ({
        applyToStack: (clientStack) => {
          clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
        }
      });
    }
  });

  // node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js
  var init_dist_es8 = __esm({
    "node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js"() {
      init_configurations();
      init_user_agent_middleware();
    }
  });

  // node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js
  var init_booleanSelector = __esm({
    "node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js"() {
    }
  });

  // node_modules/@smithy/util-config-provider/dist-es/numberSelector.js
  var init_numberSelector = __esm({
    "node_modules/@smithy/util-config-provider/dist-es/numberSelector.js"() {
    }
  });

  // node_modules/@smithy/util-config-provider/dist-es/types.js
  var SelectorType;
  var init_types4 = __esm({
    "node_modules/@smithy/util-config-provider/dist-es/types.js"() {
      (function(SelectorType2) {
        SelectorType2["ENV"] = "env";
        SelectorType2["CONFIG"] = "shared config entry";
      })(SelectorType || (SelectorType = {}));
    }
  });

  // node_modules/@smithy/util-config-provider/dist-es/index.js
  var init_dist_es9 = __esm({
    "node_modules/@smithy/util-config-provider/dist-es/index.js"() {
      init_booleanSelector();
      init_numberSelector();
      init_types4();
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js
  var DEFAULT_USE_DUALSTACK_ENDPOINT;
  var init_NodeUseDualstackEndpointConfigOptions = __esm({
    "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js"() {
      init_dist_es9();
      DEFAULT_USE_DUALSTACK_ENDPOINT = false;
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js
  var DEFAULT_USE_FIPS_ENDPOINT;
  var init_NodeUseFipsEndpointConfigOptions = __esm({
    "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js"() {
      init_dist_es9();
      DEFAULT_USE_FIPS_ENDPOINT = false;
    }
  });

  // node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js
  var getSmithyContext;
  var init_getSmithyContext = __esm({
    "node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js"() {
      init_dist_es();
      getSmithyContext = (context) => context[SMITHY_CONTEXT_KEY] || (context[SMITHY_CONTEXT_KEY] = {});
    }
  });

  // node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
  var normalizeProvider;
  var init_normalizeProvider = __esm({
    "node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js"() {
      normalizeProvider = (input) => {
        if (typeof input === "function")
          return input;
        const promisified = Promise.resolve(input);
        return () => promisified;
      };
    }
  });

  // node_modules/@smithy/util-middleware/dist-es/index.js
  var init_dist_es10 = __esm({
    "node_modules/@smithy/util-middleware/dist-es/index.js"() {
      init_getSmithyContext();
      init_normalizeProvider();
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js
  var init_resolveCustomEndpointsConfig = __esm({
    "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js"() {
      init_dist_es10();
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js
  var init_getEndpointFromRegion = __esm({
    "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js"() {
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js
  var init_resolveEndpointsConfig = __esm({
    "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js"() {
      init_dist_es10();
      init_getEndpointFromRegion();
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js
  var init_endpointsConfig = __esm({
    "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js"() {
      init_NodeUseDualstackEndpointConfigOptions();
      init_NodeUseFipsEndpointConfigOptions();
      init_resolveCustomEndpointsConfig();
      init_resolveEndpointsConfig();
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js
  var init_config2 = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js"() {
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js
  var isFipsRegion;
  var init_isFipsRegion = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js"() {
      isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js
  var getRealRegion;
  var init_getRealRegion = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js"() {
      init_isFipsRegion();
      getRealRegion = (region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region;
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js
  var resolveRegionConfig;
  var init_resolveRegionConfig = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js"() {
      init_getRealRegion();
      init_isFipsRegion();
      resolveRegionConfig = (input) => {
        const { region, useFipsEndpoint } = input;
        if (!region) {
          throw new Error("Region is missing");
        }
        return {
          ...input,
          region: async () => {
            if (typeof region === "string") {
              return getRealRegion(region);
            }
            const providedRegion = await region();
            return getRealRegion(providedRegion);
          },
          useFipsEndpoint: async () => {
            const providedRegion = typeof region === "string" ? region : await region();
            if (isFipsRegion(providedRegion)) {
              return true;
            }
            return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
          }
        };
      };
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js
  var init_regionConfig = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js"() {
      init_config2();
      init_resolveRegionConfig();
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js
  var init_PartitionHash = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js"() {
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js
  var init_RegionHash = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js"() {
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js
  var init_getHostnameFromVariants = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js"() {
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedHostname.js
  var init_getResolvedHostname = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedHostname.js"() {
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedPartition.js
  var init_getResolvedPartition = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedPartition.js"() {
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js
  var init_getResolvedSigningRegion = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js"() {
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js
  var init_getRegionInfo = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js"() {
      init_getHostnameFromVariants();
      init_getResolvedHostname();
      init_getResolvedPartition();
      init_getResolvedSigningRegion();
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js
  var init_regionInfo = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js"() {
      init_PartitionHash();
      init_RegionHash();
      init_getRegionInfo();
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/index.js
  var init_dist_es11 = __esm({
    "node_modules/@smithy/config-resolver/dist-es/index.js"() {
      init_endpointsConfig();
      init_regionConfig();
      init_regionInfo();
    }
  });

  // node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
  function convertHttpAuthSchemesToMap(httpAuthSchemes) {
    const map = /* @__PURE__ */ new Map();
    for (const scheme of httpAuthSchemes) {
      map.set(scheme.schemeId, scheme);
    }
    return map;
  }
  var httpAuthSchemeMiddleware;
  var init_httpAuthSchemeMiddleware = __esm({
    "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js"() {
      init_dist_es();
      init_dist_es10();
      httpAuthSchemeMiddleware = (config, mwOptions) => (next, context) => async (args) => {
        const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
        const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
        const smithyContext = getSmithyContext(context);
        const failureReasons = [];
        for (const option of options) {
          const scheme = authSchemes.get(option.schemeId);
          if (!scheme) {
            failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
            continue;
          }
          const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
          if (!identityProvider) {
            failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
            continue;
          }
          const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
          option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
          option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
          smithyContext.selectedHttpAuthScheme = {
            httpAuthOption: option,
            identity: await identityProvider(option.identityProperties),
            signer: scheme.signer
          };
          break;
        }
        if (!smithyContext.selectedHttpAuthScheme) {
          throw new Error(failureReasons.join("\n"));
        }
        return next(args);
      };
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js
  var resolveParamsForS3, DOMAIN_PATTERN, IP_ADDRESS_PATTERN, DOTS_PATTERN, isDnsCompatibleBucketName, isArnBucketName;
  var init_s3 = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js"() {
      resolveParamsForS3 = async (endpointParams) => {
        const bucket = endpointParams?.Bucket || "";
        if (typeof endpointParams.Bucket === "string") {
          endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
        }
        if (isArnBucketName(bucket)) {
          if (endpointParams.ForcePathStyle === true) {
            throw new Error("Path-style addressing cannot be used with ARN buckets");
          }
        } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
          endpointParams.ForcePathStyle = true;
        }
        if (endpointParams.DisableMultiRegionAccessPoints) {
          endpointParams.disableMultiRegionAccessPoints = true;
          endpointParams.DisableMRAP = true;
        }
        return endpointParams;
      };
      DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
      IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
      DOTS_PATTERN = /\.\./;
      isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
      isArnBucketName = (bucketName) => {
        const [arn, partition2, service, , , bucket] = bucketName.split(":");
        const isArn = arn === "arn" && bucketName.split(":").length >= 6;
        const isValidArn = Boolean(isArn && partition2 && service && bucket);
        if (isArn && !isValidArn) {
          throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
        }
        return isValidArn;
      };
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js
  var init_service_customizations = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js"() {
      init_s3();
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
  var createConfigValueProvider;
  var init_createConfigValueProvider = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js"() {
      createConfigValueProvider = (configKey, canonicalEndpointParamKey, config) => {
        const configProvider = async () => {
          const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
          if (typeof configValue === "function") {
            return configValue();
          }
          return configValue;
        };
        if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
          return async () => {
            const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
            const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
            return configValue;
          };
        }
        if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
          return async () => {
            const endpoint = await configProvider();
            if (endpoint && typeof endpoint === "object") {
              if ("url" in endpoint) {
                return endpoint.url.href;
              }
              if ("hostname" in endpoint) {
                const { protocol, hostname, port, path } = endpoint;
                return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
              }
            }
            return endpoint;
          };
        }
        return configProvider;
      };
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js
  var getEndpointFromConfig;
  var init_getEndpointFromConfig_browser = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js"() {
      getEndpointFromConfig = async (serviceId) => void 0;
    }
  });

  // node_modules/@smithy/querystring-parser/dist-es/index.js
  function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
      for (const pair of querystring.split("&")) {
        let [key, value = null] = pair.split("=");
        key = decodeURIComponent(key);
        if (value) {
          value = decodeURIComponent(value);
        }
        if (!(key in query)) {
          query[key] = value;
        } else if (Array.isArray(query[key])) {
          query[key].push(value);
        } else {
          query[key] = [query[key], value];
        }
      }
    }
    return query;
  }
  var init_dist_es12 = __esm({
    "node_modules/@smithy/querystring-parser/dist-es/index.js"() {
    }
  });

  // node_modules/@smithy/url-parser/dist-es/index.js
  var parseUrl;
  var init_dist_es13 = __esm({
    "node_modules/@smithy/url-parser/dist-es/index.js"() {
      init_dist_es12();
      parseUrl = (url) => {
        if (typeof url === "string") {
          return parseUrl(new URL(url));
        }
        const { hostname, pathname, port, protocol, search } = url;
        let query;
        if (search) {
          query = parseQueryString(search);
        }
        return {
          hostname,
          port: port ? parseInt(port) : void 0,
          protocol,
          path: pathname,
          query
        };
      };
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
  var toEndpointV1;
  var init_toEndpointV1 = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js"() {
      init_dist_es13();
      toEndpointV1 = (endpoint) => {
        if (typeof endpoint === "object") {
          if ("url" in endpoint) {
            return parseUrl(endpoint.url);
          }
          return endpoint;
        }
        return parseUrl(endpoint);
      };
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
  var getEndpointFromInstructions, resolveParams;
  var init_getEndpointFromInstructions = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js"() {
      init_service_customizations();
      init_createConfigValueProvider();
      init_getEndpointFromConfig_browser();
      init_toEndpointV1();
      getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
        if (!clientConfig.endpoint) {
          const endpointFromConfig = await getEndpointFromConfig(clientConfig.serviceId || "");
          if (endpointFromConfig) {
            clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
          }
        }
        const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
        if (typeof clientConfig.endpointProvider !== "function") {
          throw new Error("config.endpointProvider is not set.");
        }
        const endpoint = clientConfig.endpointProvider(endpointParams, context);
        return endpoint;
      };
      resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
        const endpointParams = {};
        const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
        for (const [name, instruction] of Object.entries(instructions)) {
          switch (instruction.type) {
            case "staticContextParams":
              endpointParams[name] = instruction.value;
              break;
            case "contextParams":
              endpointParams[name] = commandInput[instruction.name];
              break;
            case "clientContextParams":
            case "builtInParams":
              endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
              break;
            default:
              throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
          }
        }
        if (Object.keys(instructions).length === 0) {
          Object.assign(endpointParams, clientConfig);
        }
        if (String(clientConfig.serviceId).toLowerCase() === "s3") {
          await resolveParamsForS3(endpointParams);
        }
        return endpointParams;
      };
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js
  var init_adaptors = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js"() {
      init_getEndpointFromInstructions();
      init_toEndpointV1();
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js
  var endpointMiddleware;
  var init_endpointMiddleware = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js"() {
      init_dist_es10();
      init_getEndpointFromInstructions();
      endpointMiddleware = ({ config, instructions }) => {
        return (next, context) => async (args) => {
          const endpoint = await getEndpointFromInstructions(args.input, {
            getEndpointParameterInstructions() {
              return instructions;
            }
          }, { ...config }, context);
          context.endpointV2 = endpoint;
          context.authSchemes = endpoint.properties?.authSchemes;
          const authScheme = context.authSchemes?.[0];
          if (authScheme) {
            context["signing_region"] = authScheme.signingRegion;
            context["signing_service"] = authScheme.signingName;
            const smithyContext = getSmithyContext(context);
            const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
            if (httpAuthOption) {
              httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
                signing_region: authScheme.signingRegion,
                signingRegion: authScheme.signingRegion,
                signing_service: authScheme.signingName,
                signingName: authScheme.signingName,
                signingRegionSet: authScheme.signingRegionSet
              }, authScheme.properties);
            }
          }
          return next({
            ...args
          });
        };
      };
    }
  });

  // node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js
  var deserializerMiddleware;
  var init_deserializerMiddleware = __esm({
    "node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js"() {
      deserializerMiddleware = (options, deserializer) => (next, context) => async (args) => {
        const { response } = await next(args);
        try {
          const parsed = await deserializer(response, options);
          return {
            response,
            output: parsed
          };
        } catch (error) {
          Object.defineProperty(error, "$response", {
            value: response
          });
          if (!("$metadata" in error)) {
            const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
            error.message += "\n  " + hint;
            if (typeof error.$responseBodyText !== "undefined") {
              if (error.$response) {
                error.$response.body = error.$responseBodyText;
              }
            }
          }
          throw error;
        }
      };
    }
  });

  // node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js
  var serializerMiddleware;
  var init_serializerMiddleware = __esm({
    "node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js"() {
      serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
        const endpoint = context.endpointV2?.url && options.urlParser ? async () => options.urlParser(context.endpointV2.url) : options.endpoint;
        if (!endpoint) {
          throw new Error("No valid endpoint provider available.");
        }
        const request = await serializer(args.input, { ...options, endpoint });
        return next({
          ...args,
          request
        });
      };
    }
  });

  // node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
  function getSerdePlugin(config, serializer, deserializer) {
    return {
      applyToStack: (commandStack) => {
        commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
        commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
      }
    };
  }
  var deserializerMiddlewareOption, serializerMiddlewareOption;
  var init_serdePlugin = __esm({
    "node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js"() {
      init_deserializerMiddleware();
      init_serializerMiddleware();
      deserializerMiddlewareOption = {
        name: "deserializerMiddleware",
        step: "deserialize",
        tags: ["DESERIALIZER"],
        override: true
      };
      serializerMiddlewareOption = {
        name: "serializerMiddleware",
        step: "serialize",
        tags: ["SERIALIZER"],
        override: true
      };
    }
  });

  // node_modules/@smithy/middleware-serde/dist-es/index.js
  var init_dist_es14 = __esm({
    "node_modules/@smithy/middleware-serde/dist-es/index.js"() {
      init_deserializerMiddleware();
      init_serdePlugin();
      init_serializerMiddleware();
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js
  var endpointMiddlewareOptions, getEndpointPlugin;
  var init_getEndpointPlugin = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js"() {
      init_dist_es14();
      init_endpointMiddleware();
      endpointMiddlewareOptions = {
        step: "serialize",
        tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
        name: "endpointV2Middleware",
        override: true,
        relation: "before",
        toMiddleware: serializerMiddlewareOption.name
      };
      getEndpointPlugin = (config, instructions) => ({
        applyToStack: (clientStack) => {
          clientStack.addRelativeTo(endpointMiddleware({
            config,
            instructions
          }), endpointMiddlewareOptions);
        }
      });
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js
  var resolveEndpointConfig;
  var init_resolveEndpointConfig = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js"() {
      init_dist_es10();
      init_toEndpointV1();
      resolveEndpointConfig = (input) => {
        const tls = input.tls ?? true;
        const { endpoint } = input;
        const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await normalizeProvider(endpoint)()) : void 0;
        const isCustomEndpoint = !!endpoint;
        return {
          ...input,
          endpoint: customEndpointProvider,
          tls,
          isCustomEndpoint,
          useDualstackEndpoint: normalizeProvider(input.useDualstackEndpoint ?? false),
          useFipsEndpoint: normalizeProvider(input.useFipsEndpoint ?? false)
        };
      };
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/types.js
  var init_types5 = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/types.js"() {
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/index.js
  var init_dist_es15 = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/index.js"() {
      init_adaptors();
      init_endpointMiddleware();
      init_getEndpointPlugin();
      init_resolveEndpointConfig();
      init_types5();
    }
  });

  // node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
  var httpAuthSchemeEndpointRuleSetMiddlewareOptions, getHttpAuthSchemeEndpointRuleSetPlugin;
  var init_getHttpAuthSchemeEndpointRuleSetPlugin = __esm({
    "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js"() {
      init_dist_es15();
      init_httpAuthSchemeMiddleware();
      httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
        step: "serialize",
        tags: ["HTTP_AUTH_SCHEME"],
        name: "httpAuthSchemeMiddleware",
        override: true,
        relation: "before",
        toMiddleware: endpointMiddlewareOptions.name
      };
      getHttpAuthSchemeEndpointRuleSetPlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
        applyToStack: (clientStack) => {
          clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
            httpAuthSchemeParametersProvider,
            identityProviderConfigProvider
          }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
        }
      });
    }
  });

  // node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
  var httpAuthSchemeMiddlewareOptions;
  var init_getHttpAuthSchemePlugin = __esm({
    "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js"() {
      init_dist_es14();
      init_httpAuthSchemeMiddleware();
      httpAuthSchemeMiddlewareOptions = {
        step: "serialize",
        tags: ["HTTP_AUTH_SCHEME"],
        name: "httpAuthSchemeMiddleware",
        override: true,
        relation: "before",
        toMiddleware: serializerMiddlewareOption.name
      };
    }
  });

  // node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js
  var init_middleware_http_auth_scheme = __esm({
    "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js"() {
      init_httpAuthSchemeMiddleware();
      init_getHttpAuthSchemeEndpointRuleSetPlugin();
      init_getHttpAuthSchemePlugin();
    }
  });

  // node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
  var defaultErrorHandler, defaultSuccessHandler, httpSigningMiddleware;
  var init_httpSigningMiddleware = __esm({
    "node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js"() {
      init_dist_es2();
      init_dist_es();
      init_dist_es10();
      defaultErrorHandler = (signingProperties) => (error) => {
        throw error;
      };
      defaultSuccessHandler = (httpResponse, signingProperties) => {
      };
      httpSigningMiddleware = (config) => (next, context) => async (args) => {
        if (!HttpRequest.isInstance(args.request)) {
          return next(args);
        }
        const smithyContext = getSmithyContext(context);
        const scheme = smithyContext.selectedHttpAuthScheme;
        if (!scheme) {
          throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
        }
        const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
        const output = await next({
          ...args,
          request: await signer.sign(args.request, identity, signingProperties)
        }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
        (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
        return output;
      };
    }
  });

  // node_modules/@smithy/util-retry/dist-es/config.js
  var RETRY_MODES, DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE;
  var init_config3 = __esm({
    "node_modules/@smithy/util-retry/dist-es/config.js"() {
      (function(RETRY_MODES2) {
        RETRY_MODES2["STANDARD"] = "standard";
        RETRY_MODES2["ADAPTIVE"] = "adaptive";
      })(RETRY_MODES || (RETRY_MODES = {}));
      DEFAULT_MAX_ATTEMPTS = 3;
      DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;
    }
  });

  // node_modules/@smithy/service-error-classification/dist-es/constants.js
  var THROTTLING_ERROR_CODES, TRANSIENT_ERROR_CODES, TRANSIENT_ERROR_STATUS_CODES, NODEJS_TIMEOUT_ERROR_CODES;
  var init_constants2 = __esm({
    "node_modules/@smithy/service-error-classification/dist-es/constants.js"() {
      THROTTLING_ERROR_CODES = [
        "BandwidthLimitExceeded",
        "EC2ThrottledException",
        "LimitExceededException",
        "PriorRequestNotComplete",
        "ProvisionedThroughputExceededException",
        "RequestLimitExceeded",
        "RequestThrottled",
        "RequestThrottledException",
        "SlowDown",
        "ThrottledException",
        "Throttling",
        "ThrottlingException",
        "TooManyRequestsException",
        "TransactionInProgressException"
      ];
      TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
      TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
      NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
    }
  });

  // node_modules/@smithy/service-error-classification/dist-es/index.js
  var isClockSkewCorrectedError, isThrottlingError, isTransientError, isServerError;
  var init_dist_es16 = __esm({
    "node_modules/@smithy/service-error-classification/dist-es/index.js"() {
      init_constants2();
      isClockSkewCorrectedError = (error) => error.$metadata?.clockSkewCorrected;
      isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error.name) || error.$retryable?.throttling == true;
      isTransientError = (error) => isClockSkewCorrectedError(error) || TRANSIENT_ERROR_CODES.includes(error.name) || NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0);
      isServerError = (error) => {
        if (error.$metadata?.httpStatusCode !== void 0) {
          const statusCode = error.$metadata.httpStatusCode;
          if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
            return true;
          }
          return false;
        }
        return false;
      };
    }
  });

  // node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js
  var DefaultRateLimiter;
  var init_DefaultRateLimiter = __esm({
    "node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js"() {
      init_dist_es16();
      DefaultRateLimiter = class {
        constructor(options) {
          this.currentCapacity = 0;
          this.enabled = false;
          this.lastMaxRate = 0;
          this.measuredTxRate = 0;
          this.requestCount = 0;
          this.lastTimestamp = 0;
          this.timeWindow = 0;
          this.beta = options?.beta ?? 0.7;
          this.minCapacity = options?.minCapacity ?? 1;
          this.minFillRate = options?.minFillRate ?? 0.5;
          this.scaleConstant = options?.scaleConstant ?? 0.4;
          this.smooth = options?.smooth ?? 0.8;
          const currentTimeInSeconds = this.getCurrentTimeInSeconds();
          this.lastThrottleTime = currentTimeInSeconds;
          this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
          this.fillRate = this.minFillRate;
          this.maxCapacity = this.minCapacity;
        }
        getCurrentTimeInSeconds() {
          return Date.now() / 1e3;
        }
        async getSendToken() {
          return this.acquireTokenBucket(1);
        }
        async acquireTokenBucket(amount) {
          if (!this.enabled) {
            return;
          }
          this.refillTokenBucket();
          if (amount > this.currentCapacity) {
            const delay = (amount - this.currentCapacity) / this.fillRate * 1e3;
            await new Promise((resolve) => setTimeout(resolve, delay));
          }
          this.currentCapacity = this.currentCapacity - amount;
        }
        refillTokenBucket() {
          const timestamp = this.getCurrentTimeInSeconds();
          if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;
            return;
          }
          const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
          this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
          this.lastTimestamp = timestamp;
        }
        updateClientSendingRate(response) {
          let calculatedRate;
          this.updateMeasuredRate();
          if (isThrottlingError(response)) {
            const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
            this.lastMaxRate = rateToUse;
            this.calculateTimeWindow();
            this.lastThrottleTime = this.getCurrentTimeInSeconds();
            calculatedRate = this.cubicThrottle(rateToUse);
            this.enableTokenBucket();
          } else {
            this.calculateTimeWindow();
            calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
          }
          const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
          this.updateTokenBucketRate(newRate);
        }
        calculateTimeWindow() {
          this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
        }
        cubicThrottle(rateToUse) {
          return this.getPrecise(rateToUse * this.beta);
        }
        cubicSuccess(timestamp) {
          return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
        }
        enableTokenBucket() {
          this.enabled = true;
        }
        updateTokenBucketRate(newRate) {
          this.refillTokenBucket();
          this.fillRate = Math.max(newRate, this.minFillRate);
          this.maxCapacity = Math.max(newRate, this.minCapacity);
          this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
        }
        updateMeasuredRate() {
          const t3 = this.getCurrentTimeInSeconds();
          const timeBucket = Math.floor(t3 * 2) / 2;
          this.requestCount++;
          if (timeBucket > this.lastTxRateBucket) {
            const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
            this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
            this.requestCount = 0;
            this.lastTxRateBucket = timeBucket;
          }
        }
        getPrecise(num) {
          return parseFloat(num.toFixed(8));
        }
      };
    }
  });

  // node_modules/@smithy/util-retry/dist-es/constants.js
  var DEFAULT_RETRY_DELAY_BASE, MAXIMUM_RETRY_DELAY, THROTTLING_RETRY_DELAY_BASE, INITIAL_RETRY_TOKENS, RETRY_COST, TIMEOUT_RETRY_COST, NO_RETRY_INCREMENT, INVOCATION_ID_HEADER, REQUEST_HEADER;
  var init_constants3 = __esm({
    "node_modules/@smithy/util-retry/dist-es/constants.js"() {
      DEFAULT_RETRY_DELAY_BASE = 100;
      MAXIMUM_RETRY_DELAY = 20 * 1e3;
      THROTTLING_RETRY_DELAY_BASE = 500;
      INITIAL_RETRY_TOKENS = 500;
      RETRY_COST = 5;
      TIMEOUT_RETRY_COST = 10;
      NO_RETRY_INCREMENT = 1;
      INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
      REQUEST_HEADER = "amz-sdk-request";
    }
  });

  // node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js
  var getDefaultRetryBackoffStrategy;
  var init_defaultRetryBackoffStrategy = __esm({
    "node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js"() {
      init_constants3();
      getDefaultRetryBackoffStrategy = () => {
        let delayBase = DEFAULT_RETRY_DELAY_BASE;
        const computeNextBackoffDelay = (attempts) => {
          return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
        };
        const setDelayBase = (delay) => {
          delayBase = delay;
        };
        return {
          computeNextBackoffDelay,
          setDelayBase
        };
      };
    }
  });

  // node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js
  var createDefaultRetryToken;
  var init_defaultRetryToken = __esm({
    "node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js"() {
      init_constants3();
      createDefaultRetryToken = ({ retryDelay, retryCount, retryCost }) => {
        const getRetryCount = () => retryCount;
        const getRetryDelay = () => Math.min(MAXIMUM_RETRY_DELAY, retryDelay);
        const getRetryCost = () => retryCost;
        return {
          getRetryCount,
          getRetryDelay,
          getRetryCost
        };
      };
    }
  });

  // node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js
  var StandardRetryStrategy;
  var init_StandardRetryStrategy = __esm({
    "node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js"() {
      init_config3();
      init_constants3();
      init_defaultRetryBackoffStrategy();
      init_defaultRetryToken();
      StandardRetryStrategy = class {
        constructor(maxAttempts) {
          this.maxAttempts = maxAttempts;
          this.mode = RETRY_MODES.STANDARD;
          this.capacity = INITIAL_RETRY_TOKENS;
          this.retryBackoffStrategy = getDefaultRetryBackoffStrategy();
          this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
        }
        async acquireInitialRetryToken(retryTokenScope) {
          return createDefaultRetryToken({
            retryDelay: DEFAULT_RETRY_DELAY_BASE,
            retryCount: 0
          });
        }
        async refreshRetryTokenForRetry(token, errorInfo) {
          const maxAttempts = await this.getMaxAttempts();
          if (this.shouldRetry(token, errorInfo, maxAttempts)) {
            const errorType = errorInfo.errorType;
            this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE);
            const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
            const retryDelay = errorInfo.retryAfterHint ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType) : delayFromErrorType;
            const capacityCost = this.getCapacityCost(errorType);
            this.capacity -= capacityCost;
            return createDefaultRetryToken({
              retryDelay,
              retryCount: token.getRetryCount() + 1,
              retryCost: capacityCost
            });
          }
          throw new Error("No retry token available");
        }
        recordSuccess(token) {
          this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
        }
        getCapacity() {
          return this.capacity;
        }
        async getMaxAttempts() {
          try {
            return await this.maxAttemptsProvider();
          } catch (error) {
            console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
            return DEFAULT_MAX_ATTEMPTS;
          }
        }
        shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
          const attempts = tokenToRenew.getRetryCount() + 1;
          return attempts < maxAttempts && this.capacity >= this.getCapacityCost(errorInfo.errorType) && this.isRetryableError(errorInfo.errorType);
        }
        getCapacityCost(errorType) {
          return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
        }
        isRetryableError(errorType) {
          return errorType === "THROTTLING" || errorType === "TRANSIENT";
        }
      };
    }
  });

  // node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js
  var AdaptiveRetryStrategy;
  var init_AdaptiveRetryStrategy = __esm({
    "node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js"() {
      init_config3();
      init_DefaultRateLimiter();
      init_StandardRetryStrategy();
      AdaptiveRetryStrategy = class {
        constructor(maxAttemptsProvider, options) {
          this.maxAttemptsProvider = maxAttemptsProvider;
          this.mode = RETRY_MODES.ADAPTIVE;
          const { rateLimiter } = options ?? {};
          this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
          this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
        }
        async acquireInitialRetryToken(retryTokenScope) {
          await this.rateLimiter.getSendToken();
          return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
        }
        async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
          this.rateLimiter.updateClientSendingRate(errorInfo);
          return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
        }
        recordSuccess(token) {
          this.rateLimiter.updateClientSendingRate({});
          this.standardRetryStrategy.recordSuccess(token);
        }
      };
    }
  });

  // node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js
  var init_ConfiguredRetryStrategy = __esm({
    "node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js"() {
      init_constants3();
      init_StandardRetryStrategy();
    }
  });

  // node_modules/@smithy/util-retry/dist-es/types.js
  var init_types6 = __esm({
    "node_modules/@smithy/util-retry/dist-es/types.js"() {
    }
  });

  // node_modules/@smithy/util-retry/dist-es/index.js
  var init_dist_es17 = __esm({
    "node_modules/@smithy/util-retry/dist-es/index.js"() {
      init_AdaptiveRetryStrategy();
      init_ConfiguredRetryStrategy();
      init_DefaultRateLimiter();
      init_StandardRetryStrategy();
      init_config3();
      init_constants3();
      init_types6();
    }
  });

  // node_modules/uuid/dist/esm-browser/rng.js
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }
  var getRandomValues, rnds8;
  var init_rng = __esm({
    "node_modules/uuid/dist/esm-browser/rng.js"() {
      rnds8 = new Uint8Array(16);
    }
  });

  // node_modules/uuid/dist/esm-browser/stringify.js
  function unsafeStringify(arr, offset = 0) {
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
  }
  var byteToHex;
  var init_stringify = __esm({
    "node_modules/uuid/dist/esm-browser/stringify.js"() {
      byteToHex = [];
      for (let i3 = 0; i3 < 256; ++i3) {
        byteToHex.push((i3 + 256).toString(16).slice(1));
      }
    }
  });

  // node_modules/uuid/dist/esm-browser/native.js
  var randomUUID, native_default;
  var init_native = __esm({
    "node_modules/uuid/dist/esm-browser/native.js"() {
      randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
      native_default = {
        randomUUID
      };
    }
  });

  // node_modules/uuid/dist/esm-browser/v4.js
  function v4(options, buf, offset) {
    if (native_default.randomUUID && !buf && !options) {
      return native_default.randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i3 = 0; i3 < 16; ++i3) {
        buf[offset + i3] = rnds[i3];
      }
      return buf;
    }
    return unsafeStringify(rnds);
  }
  var v4_default;
  var init_v4 = __esm({
    "node_modules/uuid/dist/esm-browser/v4.js"() {
      init_native();
      init_rng();
      init_stringify();
      v4_default = v4;
    }
  });

  // node_modules/uuid/dist/esm-browser/index.js
  var init_esm_browser = __esm({
    "node_modules/uuid/dist/esm-browser/index.js"() {
      init_v4();
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js
  var init_defaultRetryQuota = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js"() {
      init_dist_es17();
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/delayDecider.js
  var init_delayDecider = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/delayDecider.js"() {
      init_dist_es17();
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/retryDecider.js
  var init_retryDecider = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/retryDecider.js"() {
      init_dist_es16();
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/util.js
  var asSdkError;
  var init_util2 = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/util.js"() {
      asSdkError = (error) => {
        if (error instanceof Error)
          return error;
        if (error instanceof Object)
          return Object.assign(new Error(), error);
        if (typeof error === "string")
          return new Error(error);
        return new Error(`AWS SDK error wrapper for ${error}`);
      };
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js
  var init_StandardRetryStrategy2 = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js"() {
      init_dist_es2();
      init_dist_es16();
      init_dist_es17();
      init_defaultRetryQuota();
      init_delayDecider();
      init_retryDecider();
      init_util2();
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js
  var init_AdaptiveRetryStrategy2 = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js"() {
      init_dist_es17();
      init_StandardRetryStrategy2();
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/configurations.js
  var resolveRetryConfig;
  var init_configurations2 = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/configurations.js"() {
      init_dist_es10();
      init_dist_es17();
      resolveRetryConfig = (input) => {
        const { retryStrategy } = input;
        const maxAttempts = normalizeProvider(input.maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
        return {
          ...input,
          maxAttempts,
          retryStrategy: async () => {
            if (retryStrategy) {
              return retryStrategy;
            }
            const retryMode = await normalizeProvider(input.retryMode)();
            if (retryMode === RETRY_MODES.ADAPTIVE) {
              return new AdaptiveRetryStrategy(maxAttempts);
            }
            return new StandardRetryStrategy(maxAttempts);
          }
        };
      };
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js
  var init_omitRetryHeadersMiddleware = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js"() {
      init_dist_es2();
      init_dist_es17();
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
  var NoOpLogger;
  var init_NoOpLogger = __esm({
    "node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js"() {
      NoOpLogger = class {
        trace() {
        }
        debug() {
        }
        info() {
        }
        warn() {
        }
        error() {
        }
      };
    }
  });

  // node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
  var getAllAliases, getMiddlewareNameWithAliases, constructStack, stepWeights, priorityWeights;
  var init_MiddlewareStack = __esm({
    "node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js"() {
      getAllAliases = (name, aliases) => {
        const _aliases = [];
        if (name) {
          _aliases.push(name);
        }
        if (aliases) {
          for (const alias of aliases) {
            _aliases.push(alias);
          }
        }
        return _aliases;
      };
      getMiddlewareNameWithAliases = (name, aliases) => {
        return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
      };
      constructStack = () => {
        let absoluteEntries = [];
        let relativeEntries = [];
        let identifyOnResolve = false;
        const entriesNameSet = /* @__PURE__ */ new Set();
        const sort = (entries) => entries.sort((a3, b3) => stepWeights[b3.step] - stepWeights[a3.step] || priorityWeights[b3.priority || "normal"] - priorityWeights[a3.priority || "normal"]);
        const removeByName = (toRemove) => {
          let isRemoved = false;
          const filterCb = (entry) => {
            const aliases = getAllAliases(entry.name, entry.aliases);
            if (aliases.includes(toRemove)) {
              isRemoved = true;
              for (const alias of aliases) {
                entriesNameSet.delete(alias);
              }
              return false;
            }
            return true;
          };
          absoluteEntries = absoluteEntries.filter(filterCb);
          relativeEntries = relativeEntries.filter(filterCb);
          return isRemoved;
        };
        const removeByReference = (toRemove) => {
          let isRemoved = false;
          const filterCb = (entry) => {
            if (entry.middleware === toRemove) {
              isRemoved = true;
              for (const alias of getAllAliases(entry.name, entry.aliases)) {
                entriesNameSet.delete(alias);
              }
              return false;
            }
            return true;
          };
          absoluteEntries = absoluteEntries.filter(filterCb);
          relativeEntries = relativeEntries.filter(filterCb);
          return isRemoved;
        };
        const cloneTo = (toStack) => {
          absoluteEntries.forEach((entry) => {
            toStack.add(entry.middleware, { ...entry });
          });
          relativeEntries.forEach((entry) => {
            toStack.addRelativeTo(entry.middleware, { ...entry });
          });
          toStack.identifyOnResolve?.(stack.identifyOnResolve());
          return toStack;
        };
        const expandRelativeMiddlewareList = (from) => {
          const expandedMiddlewareList = [];
          from.before.forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
              expandedMiddlewareList.push(entry);
            } else {
              expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
          });
          expandedMiddlewareList.push(from);
          from.after.reverse().forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
              expandedMiddlewareList.push(entry);
            } else {
              expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
          });
          return expandedMiddlewareList;
        };
        const getMiddlewareList = (debug = false) => {
          const normalizedAbsoluteEntries = [];
          const normalizedRelativeEntries = [];
          const normalizedEntriesNameMap = {};
          absoluteEntries.forEach((entry) => {
            const normalizedEntry = {
              ...entry,
              before: [],
              after: []
            };
            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
              normalizedEntriesNameMap[alias] = normalizedEntry;
            }
            normalizedAbsoluteEntries.push(normalizedEntry);
          });
          relativeEntries.forEach((entry) => {
            const normalizedEntry = {
              ...entry,
              before: [],
              after: []
            };
            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
              normalizedEntriesNameMap[alias] = normalizedEntry;
            }
            normalizedRelativeEntries.push(normalizedEntry);
          });
          normalizedRelativeEntries.forEach((entry) => {
            if (entry.toMiddleware) {
              const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
              if (toMiddleware === void 0) {
                if (debug) {
                  return;
                }
                throw new Error(`${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`);
              }
              if (entry.relation === "after") {
                toMiddleware.after.push(entry);
              }
              if (entry.relation === "before") {
                toMiddleware.before.push(entry);
              }
            }
          });
          const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
            wholeList.push(...expandedMiddlewareList);
            return wholeList;
          }, []);
          return mainChain;
        };
        const stack = {
          add: (middleware, options = {}) => {
            const { name, override, aliases: _aliases } = options;
            const entry = {
              step: "initialize",
              priority: "normal",
              middleware,
              ...options
            };
            const aliases = getAllAliases(name, _aliases);
            if (aliases.length > 0) {
              if (aliases.some((alias) => entriesNameSet.has(alias))) {
                if (!override)
                  throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
                for (const alias of aliases) {
                  const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a3) => a3 === alias));
                  if (toOverrideIndex === -1) {
                    continue;
                  }
                  const toOverride = absoluteEntries[toOverrideIndex];
                  if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                    throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`);
                  }
                  absoluteEntries.splice(toOverrideIndex, 1);
                }
              }
              for (const alias of aliases) {
                entriesNameSet.add(alias);
              }
            }
            absoluteEntries.push(entry);
          },
          addRelativeTo: (middleware, options) => {
            const { name, override, aliases: _aliases } = options;
            const entry = {
              middleware,
              ...options
            };
            const aliases = getAllAliases(name, _aliases);
            if (aliases.length > 0) {
              if (aliases.some((alias) => entriesNameSet.has(alias))) {
                if (!override)
                  throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
                for (const alias of aliases) {
                  const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a3) => a3 === alias));
                  if (toOverrideIndex === -1) {
                    continue;
                  }
                  const toOverride = relativeEntries[toOverrideIndex];
                  if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                    throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
                  }
                  relativeEntries.splice(toOverrideIndex, 1);
                }
              }
              for (const alias of aliases) {
                entriesNameSet.add(alias);
              }
            }
            relativeEntries.push(entry);
          },
          clone: () => cloneTo(constructStack()),
          use: (plugin) => {
            plugin.applyToStack(stack);
          },
          remove: (toRemove) => {
            if (typeof toRemove === "string")
              return removeByName(toRemove);
            else
              return removeByReference(toRemove);
          },
          removeByTag: (toRemove) => {
            let isRemoved = false;
            const filterCb = (entry) => {
              const { tags, name, aliases: _aliases } = entry;
              if (tags && tags.includes(toRemove)) {
                const aliases = getAllAliases(name, _aliases);
                for (const alias of aliases) {
                  entriesNameSet.delete(alias);
                }
                isRemoved = true;
                return false;
              }
              return true;
            };
            absoluteEntries = absoluteEntries.filter(filterCb);
            relativeEntries = relativeEntries.filter(filterCb);
            return isRemoved;
          },
          concat: (from) => {
            const cloned = cloneTo(constructStack());
            cloned.use(from);
            cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
            return cloned;
          },
          applyToStack: cloneTo,
          identify: () => {
            return getMiddlewareList(true).map((mw) => {
              const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
              return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
            });
          },
          identifyOnResolve(toggle) {
            if (typeof toggle === "boolean")
              identifyOnResolve = toggle;
            return identifyOnResolve;
          },
          resolve: (handler, context) => {
            for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
              handler = middleware(handler, context);
            }
            if (identifyOnResolve) {
              console.log(stack.identify());
            }
            return handler;
          }
        };
        return stack;
      };
      stepWeights = {
        initialize: 5,
        serialize: 4,
        build: 3,
        finalizeRequest: 2,
        deserialize: 1
      };
      priorityWeights = {
        high: 3,
        normal: 2,
        low: 1
      };
    }
  });

  // node_modules/@smithy/middleware-stack/dist-es/index.js
  var init_dist_es18 = __esm({
    "node_modules/@smithy/middleware-stack/dist-es/index.js"() {
      init_MiddlewareStack();
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/client.js
  var Client;
  var init_client2 = __esm({
    "node_modules/@smithy/smithy-client/dist-es/client.js"() {
      init_dist_es18();
      Client = class {
        constructor(config) {
          this.middlewareStack = constructStack();
          this.config = config;
        }
        send(command, optionsOrCb, cb) {
          const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
          const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
          const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
          if (callback) {
            handler(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
            });
          } else {
            return handler(command).then((result) => result.output);
          }
        }
        destroy() {
          if (this.config.requestHandler.destroy)
            this.config.requestHandler.destroy();
        }
      };
    }
  });

  // node_modules/@smithy/util-base64/dist-es/constants.browser.js
  var alphabetByEncoding, alphabetByValue, bitsPerLetter, bitsPerByte, maxLetterValue;
  var init_constants_browser = __esm({
    "node_modules/@smithy/util-base64/dist-es/constants.browser.js"() {
      alphabetByEncoding = {};
      alphabetByValue = new Array(64);
      for (let i3 = 0, start = "A".charCodeAt(0), limit = "Z".charCodeAt(0); i3 + start <= limit; i3++) {
        const char = String.fromCharCode(i3 + start);
        alphabetByEncoding[char] = i3;
        alphabetByValue[i3] = char;
      }
      for (let i3 = 0, start = "a".charCodeAt(0), limit = "z".charCodeAt(0); i3 + start <= limit; i3++) {
        const char = String.fromCharCode(i3 + start);
        const index = i3 + 26;
        alphabetByEncoding[char] = index;
        alphabetByValue[index] = char;
      }
      for (let i3 = 0; i3 < 10; i3++) {
        alphabetByEncoding[i3.toString(10)] = i3 + 52;
        const char = i3.toString(10);
        const index = i3 + 52;
        alphabetByEncoding[char] = index;
        alphabetByValue[index] = char;
      }
      alphabetByEncoding["+"] = 62;
      alphabetByValue[62] = "+";
      alphabetByEncoding["/"] = 63;
      alphabetByValue[63] = "/";
      bitsPerLetter = 6;
      bitsPerByte = 8;
      maxLetterValue = 63;
    }
  });

  // node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js
  var fromBase64;
  var init_fromBase64_browser = __esm({
    "node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js"() {
      init_constants_browser();
      fromBase64 = (input) => {
        let totalByteLength = input.length / 4 * 3;
        if (input.slice(-2) === "==") {
          totalByteLength -= 2;
        } else if (input.slice(-1) === "=") {
          totalByteLength--;
        }
        const out = new ArrayBuffer(totalByteLength);
        const dataView = new DataView(out);
        for (let i3 = 0; i3 < input.length; i3 += 4) {
          let bits = 0;
          let bitLength = 0;
          for (let j3 = i3, limit = i3 + 3; j3 <= limit; j3++) {
            if (input[j3] !== "=") {
              if (!(input[j3] in alphabetByEncoding)) {
                throw new TypeError(`Invalid character ${input[j3]} in base64 string.`);
              }
              bits |= alphabetByEncoding[input[j3]] << (limit - j3) * bitsPerLetter;
              bitLength += bitsPerLetter;
            } else {
              bits >>= bitsPerLetter;
            }
          }
          const chunkOffset = i3 / 4 * 3;
          bits >>= bitLength % bitsPerByte;
          const byteLength = Math.floor(bitLength / bitsPerByte);
          for (let k3 = 0; k3 < byteLength; k3++) {
            const offset = (byteLength - k3 - 1) * bitsPerByte;
            dataView.setUint8(chunkOffset + k3, (bits & 255 << offset) >> offset);
          }
        }
        return new Uint8Array(out);
      };
    }
  });

  // node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
  var fromUtf8;
  var init_fromUtf8_browser = __esm({
    "node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js"() {
      fromUtf8 = (input) => new TextEncoder().encode(input);
    }
  });

  // node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
  var toUint8Array;
  var init_toUint8Array = __esm({
    "node_modules/@smithy/util-utf8/dist-es/toUint8Array.js"() {
      init_fromUtf8_browser();
      toUint8Array = (data) => {
        if (typeof data === "string") {
          return fromUtf8(data);
        }
        if (ArrayBuffer.isView(data)) {
          return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
        }
        return new Uint8Array(data);
      };
    }
  });

  // node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js
  var toUtf8;
  var init_toUtf8_browser = __esm({
    "node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js"() {
      toUtf8 = (input) => {
        if (typeof input === "string") {
          return input;
        }
        if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
          throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
        }
        return new TextDecoder("utf-8").decode(input);
      };
    }
  });

  // node_modules/@smithy/util-utf8/dist-es/index.js
  var init_dist_es19 = __esm({
    "node_modules/@smithy/util-utf8/dist-es/index.js"() {
      init_fromUtf8_browser();
      init_toUint8Array();
      init_toUtf8_browser();
    }
  });

  // node_modules/@smithy/util-base64/dist-es/toBase64.browser.js
  function toBase64(_input) {
    let input;
    if (typeof _input === "string") {
      input = fromUtf8(_input);
    } else {
      input = _input;
    }
    const isArrayLike = typeof input === "object" && typeof input.length === "number";
    const isUint8Array = typeof input === "object" && typeof input.byteOffset === "number" && typeof input.byteLength === "number";
    if (!isArrayLike && !isUint8Array) {
      throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    }
    let str = "";
    for (let i3 = 0; i3 < input.length; i3 += 3) {
      let bits = 0;
      let bitLength = 0;
      for (let j3 = i3, limit = Math.min(i3 + 3, input.length); j3 < limit; j3++) {
        bits |= input[j3] << (limit - j3 - 1) * bitsPerByte;
        bitLength += bitsPerByte;
      }
      const bitClusterCount = Math.ceil(bitLength / bitsPerLetter);
      bits <<= bitClusterCount * bitsPerLetter - bitLength;
      for (let k3 = 1; k3 <= bitClusterCount; k3++) {
        const offset = (bitClusterCount - k3) * bitsPerLetter;
        str += alphabetByValue[(bits & maxLetterValue << offset) >> offset];
      }
      str += "==".slice(0, 4 - bitClusterCount);
    }
    return str;
  }
  var init_toBase64_browser = __esm({
    "node_modules/@smithy/util-base64/dist-es/toBase64.browser.js"() {
      init_dist_es19();
      init_constants_browser();
    }
  });

  // node_modules/@smithy/util-base64/dist-es/index.js
  var init_dist_es20 = __esm({
    "node_modules/@smithy/util-base64/dist-es/index.js"() {
      init_fromBase64_browser();
      init_toBase64_browser();
    }
  });

  // node_modules/@smithy/util-stream/dist-es/blob/transforms.js
  function transformToString(payload, encoding = "utf-8") {
    if (encoding === "base64") {
      return toBase64(payload);
    }
    return toUtf8(payload);
  }
  function transformFromString(str, encoding) {
    if (encoding === "base64") {
      return Uint8ArrayBlobAdapter.mutate(fromBase64(str));
    }
    return Uint8ArrayBlobAdapter.mutate(fromUtf8(str));
  }
  var init_transforms = __esm({
    "node_modules/@smithy/util-stream/dist-es/blob/transforms.js"() {
      init_dist_es20();
      init_dist_es19();
      init_Uint8ArrayBlobAdapter();
    }
  });

  // node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
  var Uint8ArrayBlobAdapter;
  var init_Uint8ArrayBlobAdapter = __esm({
    "node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js"() {
      init_transforms();
      Uint8ArrayBlobAdapter = class _Uint8ArrayBlobAdapter extends Uint8Array {
        static fromString(source, encoding = "utf-8") {
          switch (typeof source) {
            case "string":
              return transformFromString(source, encoding);
            default:
              throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
          }
        }
        static mutate(source) {
          Object.setPrototypeOf(source, _Uint8ArrayBlobAdapter.prototype);
          return source;
        }
        transformToString(encoding = "utf-8") {
          return transformToString(this, encoding);
        }
      };
    }
  });

  // node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.browser.js
  var init_getAwsChunkedEncodingStream_browser = __esm({
    "node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.browser.js"() {
    }
  });

  // node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
  var escapeUri, hexEncode;
  var init_escape_uri = __esm({
    "node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js"() {
      escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
      hexEncode = (c3) => `%${c3.charCodeAt(0).toString(16).toUpperCase()}`;
    }
  });

  // node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js
  var init_escape_uri_path = __esm({
    "node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js"() {
      init_escape_uri();
    }
  });

  // node_modules/@smithy/util-uri-escape/dist-es/index.js
  var init_dist_es21 = __esm({
    "node_modules/@smithy/util-uri-escape/dist-es/index.js"() {
      init_escape_uri();
      init_escape_uri_path();
    }
  });

  // node_modules/@smithy/querystring-builder/dist-es/index.js
  function buildQueryString(query) {
    const parts = [];
    for (let key of Object.keys(query).sort()) {
      const value = query[key];
      key = escapeUri(key);
      if (Array.isArray(value)) {
        for (let i3 = 0, iLen = value.length; i3 < iLen; i3++) {
          parts.push(`${key}=${escapeUri(value[i3])}`);
        }
      } else {
        let qsEntry = key;
        if (value || typeof value === "string") {
          qsEntry += `=${escapeUri(value)}`;
        }
        parts.push(qsEntry);
      }
    }
    return parts.join("&");
  }
  var init_dist_es22 = __esm({
    "node_modules/@smithy/querystring-builder/dist-es/index.js"() {
      init_dist_es21();
    }
  });

  // node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
  function requestTimeout(timeoutInMs = 0) {
    return new Promise((resolve, reject) => {
      if (timeoutInMs) {
        setTimeout(() => {
          const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
          timeoutError.name = "TimeoutError";
          reject(timeoutError);
        }, timeoutInMs);
      }
    });
  }
  var init_request_timeout = __esm({
    "node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js"() {
    }
  });

  // node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
  var keepAliveSupport, FetchHttpHandler;
  var init_fetch_http_handler = __esm({
    "node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js"() {
      init_dist_es2();
      init_dist_es22();
      init_request_timeout();
      keepAliveSupport = {
        supported: Boolean(typeof Request !== "undefined" && "keepalive" in new Request("https://[::1]"))
      };
      FetchHttpHandler = class _FetchHttpHandler {
        static create(instanceOrOptions) {
          if (typeof instanceOrOptions?.handle === "function") {
            return instanceOrOptions;
          }
          return new _FetchHttpHandler(instanceOrOptions);
        }
        constructor(options) {
          if (typeof options === "function") {
            this.configProvider = options().then((opts) => opts || {});
          } else {
            this.config = options ?? {};
            this.configProvider = Promise.resolve(this.config);
          }
        }
        destroy() {
        }
        async handle(request, { abortSignal } = {}) {
          if (!this.config) {
            this.config = await this.configProvider;
          }
          const requestTimeoutInMs = this.config.requestTimeout;
          const keepAlive = this.config.keepAlive === true;
          if (abortSignal?.aborted) {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            return Promise.reject(abortError);
          }
          let path = request.path;
          const queryString = buildQueryString(request.query || {});
          if (queryString) {
            path += `?${queryString}`;
          }
          if (request.fragment) {
            path += `#${request.fragment}`;
          }
          let auth = "";
          if (request.username != null || request.password != null) {
            const username = request.username ?? "";
            const password = request.password ?? "";
            auth = `${username}:${password}@`;
          }
          const { port, method } = request;
          const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
          const body = method === "GET" || method === "HEAD" ? void 0 : request.body;
          const requestOptions = { body, headers: new Headers(request.headers), method };
          if (typeof AbortController !== "undefined") {
            requestOptions["signal"] = abortSignal;
          }
          if (keepAliveSupport.supported) {
            requestOptions["keepalive"] = keepAlive;
          }
          const fetchRequest = new Request(url, requestOptions);
          const raceOfPromises = [
            fetch(fetchRequest).then((response) => {
              const fetchHeaders = response.headers;
              const transformedHeaders = {};
              for (const pair of fetchHeaders.entries()) {
                transformedHeaders[pair[0]] = pair[1];
              }
              const hasReadableStream = response.body != void 0;
              if (!hasReadableStream) {
                return response.blob().then((body2) => ({
                  response: new HttpResponse({
                    headers: transformedHeaders,
                    reason: response.statusText,
                    statusCode: response.status,
                    body: body2
                  })
                }));
              }
              return {
                response: new HttpResponse({
                  headers: transformedHeaders,
                  reason: response.statusText,
                  statusCode: response.status,
                  body: response.body
                })
              };
            }),
            requestTimeout(requestTimeoutInMs)
          ];
          if (abortSignal) {
            raceOfPromises.push(new Promise((resolve, reject) => {
              abortSignal.onabort = () => {
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
              };
            }));
          }
          return Promise.race(raceOfPromises);
        }
        updateHttpClientConfig(key, value) {
          this.config = void 0;
          this.configProvider = this.configProvider.then((config) => {
            config[key] = value;
            return config;
          });
        }
        httpHandlerConfigs() {
          return this.config ?? {};
        }
      };
    }
  });

  // node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
  async function collectBlob(blob) {
    const base64 = await readToBase64(blob);
    const arrayBuffer = fromBase64(base64);
    return new Uint8Array(arrayBuffer);
  }
  async function collectStream(stream) {
    let res = new Uint8Array(0);
    const reader = stream.getReader();
    let isDone = false;
    while (!isDone) {
      const { done, value } = await reader.read();
      if (value) {
        const prior = res;
        res = new Uint8Array(prior.length + value.length);
        res.set(prior);
        res.set(value, prior.length);
      }
      isDone = done;
    }
    return res;
  }
  function readToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.readyState !== 2) {
          return reject(new Error("Reader aborted too early"));
        }
        const result = reader.result ?? "";
        const commaIndex = result.indexOf(",");
        const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
        resolve(result.substring(dataOffset));
      };
      reader.onabort = () => reject(new Error("Read aborted"));
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
  }
  var streamCollector;
  var init_stream_collector = __esm({
    "node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js"() {
      init_dist_es20();
      streamCollector = (stream) => {
        if (typeof Blob === "function" && stream instanceof Blob) {
          return collectBlob(stream);
        }
        return collectStream(stream);
      };
    }
  });

  // node_modules/@smithy/fetch-http-handler/dist-es/index.js
  var init_dist_es23 = __esm({
    "node_modules/@smithy/fetch-http-handler/dist-es/index.js"() {
      init_fetch_http_handler();
      init_stream_collector();
    }
  });

  // node_modules/@smithy/util-hex-encoding/dist-es/index.js
  function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
      throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for (let i3 = 0; i3 < encoded.length; i3 += 2) {
      const encodedByte = encoded.slice(i3, i3 + 2).toLowerCase();
      if (encodedByte in HEX_TO_SHORT) {
        out[i3 / 2] = HEX_TO_SHORT[encodedByte];
      } else {
        throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
      }
    }
    return out;
  }
  function toHex(bytes) {
    let out = "";
    for (let i3 = 0; i3 < bytes.byteLength; i3++) {
      out += SHORT_TO_HEX[bytes[i3]];
    }
    return out;
  }
  var SHORT_TO_HEX, HEX_TO_SHORT;
  var init_dist_es24 = __esm({
    "node_modules/@smithy/util-hex-encoding/dist-es/index.js"() {
      SHORT_TO_HEX = {};
      HEX_TO_SHORT = {};
      for (let i3 = 0; i3 < 256; i3++) {
        let encodedByte = i3.toString(16).toLowerCase();
        if (encodedByte.length === 1) {
          encodedByte = `0${encodedByte}`;
        }
        SHORT_TO_HEX[i3] = encodedByte;
        HEX_TO_SHORT[encodedByte] = i3;
      }
    }
  });

  // node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js
  var init_sdk_stream_mixin_browser = __esm({
    "node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js"() {
      init_dist_es23();
      init_dist_es20();
      init_dist_es24();
      init_dist_es19();
    }
  });

  // node_modules/@smithy/util-stream/dist-es/index.js
  var init_dist_es25 = __esm({
    "node_modules/@smithy/util-stream/dist-es/index.js"() {
      init_Uint8ArrayBlobAdapter();
      init_getAwsChunkedEncodingStream_browser();
      init_sdk_stream_mixin_browser();
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js
  var collectBody;
  var init_collect_stream_body = __esm({
    "node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js"() {
      init_dist_es25();
      collectBody = async (streamBody = new Uint8Array(), context) => {
        if (streamBody instanceof Uint8Array) {
          return Uint8ArrayBlobAdapter.mutate(streamBody);
        }
        if (!streamBody) {
          return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
        }
        const fromContext = context.streamCollector(streamBody);
        return Uint8ArrayBlobAdapter.mutate(await fromContext);
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/command.js
  var Command, ClassBuilder;
  var init_command2 = __esm({
    "node_modules/@smithy/smithy-client/dist-es/command.js"() {
      init_dist_es18();
      init_dist_es();
      Command = class {
        constructor() {
          this.middlewareStack = constructStack();
        }
        static classBuilder() {
          return new ClassBuilder();
        }
        resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
          for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
            this.middlewareStack.use(mw);
          }
          const stack = clientStack.concat(this.middlewareStack);
          const { logger: logger2 } = configuration;
          const handlerExecutionContext = {
            logger: logger2,
            clientName,
            commandName,
            inputFilterSensitiveLog,
            outputFilterSensitiveLog,
            [SMITHY_CONTEXT_KEY]: {
              ...smithyContext
            },
            ...additionalContext
          };
          const { requestHandler } = configuration;
          return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
        }
      };
      ClassBuilder = class {
        constructor() {
          this._init = () => {
          };
          this._ep = {};
          this._middlewareFn = () => [];
          this._commandName = "";
          this._clientName = "";
          this._additionalContext = {};
          this._smithyContext = {};
          this._inputFilterSensitiveLog = (_) => _;
          this._outputFilterSensitiveLog = (_) => _;
          this._serializer = null;
          this._deserializer = null;
        }
        init(cb) {
          this._init = cb;
        }
        ep(endpointParameterInstructions) {
          this._ep = endpointParameterInstructions;
          return this;
        }
        m(middlewareSupplier) {
          this._middlewareFn = middlewareSupplier;
          return this;
        }
        s(service, operation, smithyContext = {}) {
          this._smithyContext = {
            service,
            operation,
            ...smithyContext
          };
          return this;
        }
        c(additionalContext = {}) {
          this._additionalContext = additionalContext;
          return this;
        }
        n(clientName, commandName) {
          this._clientName = clientName;
          this._commandName = commandName;
          return this;
        }
        f(inputFilter = (_) => _, outputFilter = (_) => _) {
          this._inputFilterSensitiveLog = inputFilter;
          this._outputFilterSensitiveLog = outputFilter;
          return this;
        }
        ser(serializer) {
          this._serializer = serializer;
          return this;
        }
        de(deserializer) {
          this._deserializer = deserializer;
          return this;
        }
        build() {
          const closure = this;
          let CommandRef;
          return CommandRef = class extends Command {
            static getEndpointParameterInstructions() {
              return closure._ep;
            }
            constructor(...[input]) {
              super();
              this.serialize = closure._serializer;
              this.deserialize = closure._deserializer;
              this.input = input ?? {};
              closure._init(this);
            }
            resolveMiddleware(stack, configuration, options) {
              return this.resolveMiddlewareWithContext(stack, configuration, options, {
                CommandCtor: CommandRef,
                middlewareFn: closure._middlewareFn,
                clientName: closure._clientName,
                commandName: closure._commandName,
                inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
                outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
                smithyContext: closure._smithyContext,
                additionalContext: closure._additionalContext
              });
            }
          };
        }
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/constants.js
  var init_constants4 = __esm({
    "node_modules/@smithy/smithy-client/dist-es/constants.js"() {
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js
  var createAggregatedClient;
  var init_create_aggregated_client = __esm({
    "node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js"() {
      createAggregatedClient = (commands2, Client2) => {
        for (const command of Object.keys(commands2)) {
          const CommandCtor = commands2[command];
          const methodImpl = async function(args, optionsOrCb, cb) {
            const command2 = new CommandCtor(args);
            if (typeof optionsOrCb === "function") {
              this.send(command2, optionsOrCb);
            } else if (typeof cb === "function") {
              if (typeof optionsOrCb !== "object")
                throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
              this.send(command2, optionsOrCb || {}, cb);
            } else {
              return this.send(command2, optionsOrCb);
            }
          };
          const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
          Client2.prototype[methodName] = methodImpl;
        }
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/parse-utils.js
  var expectBoolean, expectNumber, MAX_FLOAT, expectLong, expectInt32, expectSizedInt, castInt, expectNonNull, expectObject, expectString, expectUnion, strictParseDouble, NUMBER_REGEX, parseNumber, limitedParseDouble, parseFloatString, stackTraceWarning, logger;
  var init_parse_utils = __esm({
    "node_modules/@smithy/smithy-client/dist-es/parse-utils.js"() {
      expectBoolean = (value) => {
        if (value === null || value === void 0) {
          return void 0;
        }
        if (typeof value === "number") {
          if (value === 0 || value === 1) {
            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
          }
          if (value === 0) {
            return false;
          }
          if (value === 1) {
            return true;
          }
        }
        if (typeof value === "string") {
          const lower = value.toLowerCase();
          if (lower === "false" || lower === "true") {
            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
          }
          if (lower === "false") {
            return false;
          }
          if (lower === "true") {
            return true;
          }
        }
        if (typeof value === "boolean") {
          return value;
        }
        throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
      };
      expectNumber = (value) => {
        if (value === null || value === void 0) {
          return void 0;
        }
        if (typeof value === "string") {
          const parsed = parseFloat(value);
          if (!Number.isNaN(parsed)) {
            if (String(parsed) !== String(value)) {
              logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
            }
            return parsed;
          }
        }
        if (typeof value === "number") {
          return value;
        }
        throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
      };
      MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
      expectLong = (value) => {
        if (value === null || value === void 0) {
          return void 0;
        }
        if (Number.isInteger(value) && !Number.isNaN(value)) {
          return value;
        }
        throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
      };
      expectInt32 = (value) => expectSizedInt(value, 32);
      expectSizedInt = (value, size) => {
        const expected = expectLong(value);
        if (expected !== void 0 && castInt(expected, size) !== expected) {
          throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
        }
        return expected;
      };
      castInt = (value, size) => {
        switch (size) {
          case 32:
            return Int32Array.of(value)[0];
          case 16:
            return Int16Array.of(value)[0];
          case 8:
            return Int8Array.of(value)[0];
        }
      };
      expectNonNull = (value, location) => {
        if (value === null || value === void 0) {
          if (location) {
            throw new TypeError(`Expected a non-null value for ${location}`);
          }
          throw new TypeError("Expected a non-null value");
        }
        return value;
      };
      expectObject = (value) => {
        if (value === null || value === void 0) {
          return void 0;
        }
        if (typeof value === "object" && !Array.isArray(value)) {
          return value;
        }
        const receivedType = Array.isArray(value) ? "array" : typeof value;
        throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
      };
      expectString = (value) => {
        if (value === null || value === void 0) {
          return void 0;
        }
        if (typeof value === "string") {
          return value;
        }
        if (["boolean", "number", "bigint"].includes(typeof value)) {
          logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
          return String(value);
        }
        throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
      };
      expectUnion = (value) => {
        if (value === null || value === void 0) {
          return void 0;
        }
        const asObject = expectObject(value);
        const setKeys = Object.entries(asObject).filter(([, v3]) => v3 != null).map(([k3]) => k3);
        if (setKeys.length === 0) {
          throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
        }
        if (setKeys.length > 1) {
          throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
        }
        return asObject;
      };
      strictParseDouble = (value) => {
        if (typeof value == "string") {
          return expectNumber(parseNumber(value));
        }
        return expectNumber(value);
      };
      NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
      parseNumber = (value) => {
        const matches = value.match(NUMBER_REGEX);
        if (matches === null || matches[0].length !== value.length) {
          throw new TypeError(`Expected real number, got implicit NaN`);
        }
        return parseFloat(value);
      };
      limitedParseDouble = (value) => {
        if (typeof value == "string") {
          return parseFloatString(value);
        }
        return expectNumber(value);
      };
      parseFloatString = (value) => {
        switch (value) {
          case "NaN":
            return NaN;
          case "Infinity":
            return Infinity;
          case "-Infinity":
            return -Infinity;
          default:
            throw new Error(`Unable to parse float value: ${value}`);
        }
      };
      stackTraceWarning = (message) => {
        return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s3) => !s3.includes("stackTraceWarning")).join("\n");
      };
      logger = {
        warn: console.warn
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/date-utils.js
  var RFC3339, RFC3339_WITH_OFFSET, IMF_FIXDATE, RFC_850_DATE, ASC_TIME, parseEpochTimestamp, FIFTY_YEARS_IN_MILLIS;
  var init_date_utils = __esm({
    "node_modules/@smithy/smithy-client/dist-es/date-utils.js"() {
      init_parse_utils();
      RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
      RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
      IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
      RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
      ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
      parseEpochTimestamp = (value) => {
        if (value === null || value === void 0) {
          return void 0;
        }
        let valueAsDouble;
        if (typeof value === "number") {
          valueAsDouble = value;
        } else if (typeof value === "string") {
          valueAsDouble = strictParseDouble(value);
        } else {
          throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
        }
        if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
          throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
        }
        return new Date(Math.round(valueAsDouble * 1e3));
      };
      FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/exceptions.js
  var ServiceException, decorateServiceException;
  var init_exceptions = __esm({
    "node_modules/@smithy/smithy-client/dist-es/exceptions.js"() {
      ServiceException = class _ServiceException extends Error {
        constructor(options) {
          super(options.message);
          Object.setPrototypeOf(this, _ServiceException.prototype);
          this.name = options.name;
          this.$fault = options.$fault;
          this.$metadata = options.$metadata;
        }
      };
      decorateServiceException = (exception, additions = {}) => {
        Object.entries(additions).filter(([, v3]) => v3 !== void 0).forEach(([k3, v3]) => {
          if (exception[k3] == void 0 || exception[k3] === "") {
            exception[k3] = v3;
          }
        });
        const message = exception.message || exception.Message || "UnknownError";
        exception.message = message;
        delete exception.Message;
        return exception;
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/default-error-handler.js
  var throwDefaultError, withBaseException, deserializeMetadata;
  var init_default_error_handler = __esm({
    "node_modules/@smithy/smithy-client/dist-es/default-error-handler.js"() {
      init_exceptions();
      throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
        const $metadata = deserializeMetadata(output);
        const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
        const response = new exceptionCtor({
          name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
          $fault: "client",
          $metadata
        });
        throw decorateServiceException(response, parsedBody);
      };
      withBaseException = (ExceptionCtor) => {
        return ({ output, parsedBody, errorCode }) => {
          throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
        };
      };
      deserializeMetadata = (output) => ({
        httpStatusCode: output.statusCode,
        requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"]
      });
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
  var loadConfigsForDefaultMode;
  var init_defaults_mode = __esm({
    "node_modules/@smithy/smithy-client/dist-es/defaults-mode.js"() {
      loadConfigsForDefaultMode = (mode) => {
        switch (mode) {
          case "standard":
            return {
              retryMode: "standard",
              connectionTimeout: 3100
            };
          case "in-region":
            return {
              retryMode: "standard",
              connectionTimeout: 1100
            };
          case "cross-region":
            return {
              retryMode: "standard",
              connectionTimeout: 3100
            };
          case "mobile":
            return {
              retryMode: "standard",
              connectionTimeout: 3e4
            };
          default:
            return {};
        }
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js
  var init_emitWarningIfUnsupportedVersion = __esm({
    "node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js"() {
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js
  var getChecksumConfiguration2, resolveChecksumRuntimeConfig2;
  var init_checksum3 = __esm({
    "node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js"() {
      init_dist_es();
      getChecksumConfiguration2 = (runtimeConfig) => {
        const checksumAlgorithms = [];
        for (const id in AlgorithmId) {
          const algorithmId = AlgorithmId[id];
          if (runtimeConfig[algorithmId] === void 0) {
            continue;
          }
          checksumAlgorithms.push({
            algorithmId: () => algorithmId,
            checksumConstructor: () => runtimeConfig[algorithmId]
          });
        }
        return {
          _checksumAlgorithms: checksumAlgorithms,
          addChecksumAlgorithm(algo) {
            this._checksumAlgorithms.push(algo);
          },
          checksumAlgorithms() {
            return this._checksumAlgorithms;
          }
        };
      };
      resolveChecksumRuntimeConfig2 = (clientConfig) => {
        const runtimeConfig = {};
        clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
          runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
        });
        return runtimeConfig;
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
  var getRetryConfiguration, resolveRetryRuntimeConfig;
  var init_retry2 = __esm({
    "node_modules/@smithy/smithy-client/dist-es/extensions/retry.js"() {
      getRetryConfiguration = (runtimeConfig) => {
        let _retryStrategy = runtimeConfig.retryStrategy;
        return {
          setRetryStrategy(retryStrategy) {
            _retryStrategy = retryStrategy;
          },
          retryStrategy() {
            return _retryStrategy;
          }
        };
      };
      resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
        const runtimeConfig = {};
        runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
        return runtimeConfig;
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
  var getDefaultExtensionConfiguration, resolveDefaultRuntimeConfig;
  var init_defaultExtensionConfiguration2 = __esm({
    "node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js"() {
      init_checksum3();
      init_retry2();
      getDefaultExtensionConfiguration = (runtimeConfig) => {
        return {
          ...getChecksumConfiguration2(runtimeConfig),
          ...getRetryConfiguration(runtimeConfig)
        };
      };
      resolveDefaultRuntimeConfig = (config) => {
        return {
          ...resolveChecksumRuntimeConfig2(config),
          ...resolveRetryRuntimeConfig(config)
        };
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/extensions/index.js
  var init_extensions3 = __esm({
    "node_modules/@smithy/smithy-client/dist-es/extensions/index.js"() {
      init_defaultExtensionConfiguration2();
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js
  var init_extended_encode_uri_component = __esm({
    "node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js"() {
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js
  var init_get_array_if_single_item = __esm({
    "node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js"() {
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js
  var init_get_value_from_text_node = __esm({
    "node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js"() {
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/lazy-json.js
  var StringWrapper;
  var init_lazy_json = __esm({
    "node_modules/@smithy/smithy-client/dist-es/lazy-json.js"() {
      StringWrapper = function() {
        const Class = Object.getPrototypeOf(this).constructor;
        const Constructor = Function.bind.apply(String, [null, ...arguments]);
        const instance = new Constructor();
        Object.setPrototypeOf(instance, Class.prototype);
        return instance;
      };
      StringWrapper.prototype = Object.create(String.prototype, {
        constructor: {
          value: StringWrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      Object.setPrototypeOf(StringWrapper, String);
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/object-mapping.js
  var take, applyInstruction, nonNullish, pass;
  var init_object_mapping = __esm({
    "node_modules/@smithy/smithy-client/dist-es/object-mapping.js"() {
      take = (source, instructions) => {
        const out = {};
        for (const key in instructions) {
          applyInstruction(out, source, instructions, key);
        }
        return out;
      };
      applyInstruction = (target, source, instructions, targetKey) => {
        if (source !== null) {
          let instruction = instructions[targetKey];
          if (typeof instruction === "function") {
            instruction = [, instruction];
          }
          const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
          if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
            target[targetKey] = valueFn(source[sourceKey]);
          }
          return;
        }
        let [filter, value] = instructions[targetKey];
        if (typeof value === "function") {
          let _value;
          const defaultFilterPassed = filter === void 0 && (_value = value()) != null;
          const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
          if (defaultFilterPassed) {
            target[targetKey] = _value;
          } else if (customFilterPassed) {
            target[targetKey] = value();
          }
        } else {
          const defaultFilterPassed = filter === void 0 && value != null;
          const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
          if (defaultFilterPassed || customFilterPassed) {
            target[targetKey] = value;
          }
        }
      };
      nonNullish = (_) => _ != null;
      pass = (_) => _;
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/resolve-path.js
  var init_resolve_path = __esm({
    "node_modules/@smithy/smithy-client/dist-es/resolve-path.js"() {
      init_extended_encode_uri_component();
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/ser-utils.js
  var init_ser_utils = __esm({
    "node_modules/@smithy/smithy-client/dist-es/ser-utils.js"() {
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/serde-json.js
  var _json;
  var init_serde_json = __esm({
    "node_modules/@smithy/smithy-client/dist-es/serde-json.js"() {
      _json = (obj) => {
        if (obj == null) {
          return {};
        }
        if (Array.isArray(obj)) {
          return obj.filter((_) => _ != null).map(_json);
        }
        if (typeof obj === "object") {
          const target = {};
          for (const key of Object.keys(obj)) {
            if (obj[key] == null) {
              continue;
            }
            target[key] = _json(obj[key]);
          }
          return target;
        }
        return obj;
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/split-every.js
  var init_split_every = __esm({
    "node_modules/@smithy/smithy-client/dist-es/split-every.js"() {
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/index.js
  var init_dist_es26 = __esm({
    "node_modules/@smithy/smithy-client/dist-es/index.js"() {
      init_NoOpLogger();
      init_client2();
      init_collect_stream_body();
      init_command2();
      init_constants4();
      init_create_aggregated_client();
      init_date_utils();
      init_default_error_handler();
      init_defaults_mode();
      init_emitWarningIfUnsupportedVersion();
      init_extensions3();
      init_exceptions();
      init_extended_encode_uri_component();
      init_get_array_if_single_item();
      init_get_value_from_text_node();
      init_lazy_json();
      init_object_mapping();
      init_parse_utils();
      init_resolve_path();
      init_ser_utils();
      init_serde_json();
      init_split_every();
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.browser.js
  var isStreamingPayload;
  var init_isStreamingPayload_browser = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.browser.js"() {
      isStreamingPayload = (request) => request?.body instanceof ReadableStream;
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js
  var retryMiddleware, isRetryStrategyV2, getRetryErrorInfo, getRetryErrorType, retryMiddlewareOptions, getRetryPlugin, getRetryAfterHint;
  var init_retryMiddleware = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js"() {
      init_dist_es2();
      init_dist_es16();
      init_dist_es26();
      init_dist_es17();
      init_esm_browser();
      init_isStreamingPayload_browser();
      init_util2();
      retryMiddleware = (options) => (next, context) => async (args) => {
        let retryStrategy = await options.retryStrategy();
        const maxAttempts = await options.maxAttempts();
        if (isRetryStrategyV2(retryStrategy)) {
          retryStrategy = retryStrategy;
          let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
          let lastError = new Error();
          let attempts = 0;
          let totalRetryDelay = 0;
          const { request } = args;
          const isRequest = HttpRequest.isInstance(request);
          if (isRequest) {
            request.headers[INVOCATION_ID_HEADER] = v4_default();
          }
          while (true) {
            try {
              if (isRequest) {
                request.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
              }
              const { response, output } = await next(args);
              retryStrategy.recordSuccess(retryToken);
              output.$metadata.attempts = attempts + 1;
              output.$metadata.totalRetryDelay = totalRetryDelay;
              return { response, output };
            } catch (e3) {
              const retryErrorInfo = getRetryErrorInfo(e3);
              lastError = asSdkError(e3);
              if (isRequest && isStreamingPayload(request)) {
                (context.logger instanceof NoOpLogger ? console : context.logger)?.warn("An error was encountered in a non-retryable streaming request.");
                throw lastError;
              }
              try {
                retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
              } catch (refreshError) {
                if (!lastError.$metadata) {
                  lastError.$metadata = {};
                }
                lastError.$metadata.attempts = attempts + 1;
                lastError.$metadata.totalRetryDelay = totalRetryDelay;
                throw lastError;
              }
              attempts = retryToken.getRetryCount();
              const delay = retryToken.getRetryDelay();
              totalRetryDelay += delay;
              await new Promise((resolve) => setTimeout(resolve, delay));
            }
          }
        } else {
          retryStrategy = retryStrategy;
          if (retryStrategy?.mode)
            context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
          return retryStrategy.retry(next, args);
        }
      };
      isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined";
      getRetryErrorInfo = (error) => {
        const errorInfo = {
          error,
          errorType: getRetryErrorType(error)
        };
        const retryAfterHint = getRetryAfterHint(error.$response);
        if (retryAfterHint) {
          errorInfo.retryAfterHint = retryAfterHint;
        }
        return errorInfo;
      };
      getRetryErrorType = (error) => {
        if (isThrottlingError(error))
          return "THROTTLING";
        if (isTransientError(error))
          return "TRANSIENT";
        if (isServerError(error))
          return "SERVER_ERROR";
        return "CLIENT_ERROR";
      };
      retryMiddlewareOptions = {
        name: "retryMiddleware",
        tags: ["RETRY"],
        step: "finalizeRequest",
        priority: "high",
        override: true
      };
      getRetryPlugin = (options) => ({
        applyToStack: (clientStack) => {
          clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
        }
      });
      getRetryAfterHint = (response) => {
        if (!HttpResponse.isInstance(response))
          return;
        const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
        if (!retryAfterHeaderName)
          return;
        const retryAfter = response.headers[retryAfterHeaderName];
        const retryAfterSeconds = Number(retryAfter);
        if (!Number.isNaN(retryAfterSeconds))
          return new Date(retryAfterSeconds * 1e3);
        const retryAfterDate = new Date(retryAfter);
        return retryAfterDate;
      };
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/index.js
  var init_dist_es27 = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/index.js"() {
      init_AdaptiveRetryStrategy2();
      init_StandardRetryStrategy2();
      init_configurations2();
      init_delayDecider();
      init_omitRetryHeadersMiddleware();
      init_retryDecider();
      init_retryMiddleware();
    }
  });

  // node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
  var httpSigningMiddlewareOptions, getHttpSigningPlugin;
  var init_getHttpSigningMiddleware = __esm({
    "node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js"() {
      init_dist_es27();
      init_httpSigningMiddleware();
      httpSigningMiddlewareOptions = {
        step: "finalizeRequest",
        tags: ["HTTP_SIGNING"],
        name: "httpSigningMiddleware",
        aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
        override: true,
        relation: "after",
        toMiddleware: retryMiddlewareOptions.name
      };
      getHttpSigningPlugin = (config) => ({
        applyToStack: (clientStack) => {
          clientStack.addRelativeTo(httpSigningMiddleware(config), httpSigningMiddlewareOptions);
        }
      });
    }
  });

  // node_modules/@smithy/core/dist-es/middleware-http-signing/index.js
  var init_middleware_http_signing = __esm({
    "node_modules/@smithy/core/dist-es/middleware-http-signing/index.js"() {
      init_httpSigningMiddleware();
      init_getHttpSigningMiddleware();
    }
  });

  // node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
  var DefaultIdentityProviderConfig;
  var init_DefaultIdentityProviderConfig = __esm({
    "node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js"() {
      DefaultIdentityProviderConfig = class {
        constructor(config) {
          this.authSchemes = /* @__PURE__ */ new Map();
          for (const [key, value] of Object.entries(config)) {
            if (value !== void 0) {
              this.authSchemes.set(key, value);
            }
          }
        }
        getIdentityProvider(schemeId) {
          return this.authSchemes.get(schemeId);
        }
      };
    }
  });

  // node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js
  var init_httpApiKeyAuth = __esm({
    "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js"() {
      init_dist_es();
    }
  });

  // node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js
  var init_httpBearerAuth = __esm({
    "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js"() {
    }
  });

  // node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js
  var NoAuthSigner;
  var init_noAuth = __esm({
    "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js"() {
      NoAuthSigner = class {
        async sign(httpRequest, identity, signingProperties) {
          return httpRequest;
        }
      };
    }
  });

  // node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js
  var init_httpAuthSchemes = __esm({
    "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js"() {
      init_httpApiKeyAuth();
      init_httpBearerAuth();
      init_noAuth();
    }
  });

  // node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
  var createIsIdentityExpiredFunction, EXPIRATION_MS, isIdentityExpired, doesIdentityRequireRefresh, memoizeIdentityProvider;
  var init_memoizeIdentityProvider = __esm({
    "node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js"() {
      createIsIdentityExpiredFunction = (expirationMs) => (identity) => doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
      EXPIRATION_MS = 3e5;
      isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
      doesIdentityRequireRefresh = (identity) => identity.expiration !== void 0;
      memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
        if (provider === void 0) {
          return void 0;
        }
        const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
        let resolved;
        let pending;
        let hasResult;
        let isConstant = false;
        const coalesceProvider = async (options) => {
          if (!pending) {
            pending = normalizedProvider(options);
          }
          try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
          } finally {
            pending = void 0;
          }
          return resolved;
        };
        if (isExpired === void 0) {
          return async (options) => {
            if (!hasResult || options?.forceRefresh) {
              resolved = await coalesceProvider(options);
            }
            return resolved;
          };
        }
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider(options);
          }
          if (isConstant) {
            return resolved;
          }
          if (!requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
          }
          if (isExpired(resolved)) {
            await coalesceProvider(options);
            return resolved;
          }
          return resolved;
        };
      };
    }
  });

  // node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js
  var init_util_identity_and_auth = __esm({
    "node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js"() {
      init_DefaultIdentityProviderConfig();
      init_httpAuthSchemes();
      init_memoizeIdentityProvider();
    }
  });

  // node_modules/@smithy/core/dist-es/getSmithyContext.js
  var init_getSmithyContext2 = __esm({
    "node_modules/@smithy/core/dist-es/getSmithyContext.js"() {
      init_dist_es();
    }
  });

  // node_modules/@smithy/core/dist-es/normalizeProvider.js
  var normalizeProvider2;
  var init_normalizeProvider2 = __esm({
    "node_modules/@smithy/core/dist-es/normalizeProvider.js"() {
      normalizeProvider2 = (input) => {
        if (typeof input === "function")
          return input;
        const promisified = Promise.resolve(input);
        return () => promisified;
      };
    }
  });

  // node_modules/@smithy/core/dist-es/protocols/requestBuilder.js
  var init_requestBuilder = __esm({
    "node_modules/@smithy/core/dist-es/protocols/requestBuilder.js"() {
      init_dist_es2();
      init_dist_es26();
    }
  });

  // node_modules/@smithy/core/dist-es/pagination/createPaginator.js
  function createPaginator(ClientCtor, CommandCtor, inputTokenName, outputTokenName, pageSizeTokenName) {
    return async function* paginateOperation(config, input, ...additionalArguments) {
      let token = config.startingToken || void 0;
      let hasNext = true;
      let page;
      while (hasNext) {
        input[inputTokenName] = token;
        if (pageSizeTokenName) {
          input[pageSizeTokenName] = input[pageSizeTokenName] ?? config.pageSize;
        }
        if (config.client instanceof ClientCtor) {
          page = await makePagedClientRequest(CommandCtor, config.client, input, ...additionalArguments);
        } else {
          throw new Error(`Invalid client, expected instance of ${ClientCtor.name}`);
        }
        yield page;
        const prevToken = token;
        token = get(page, outputTokenName);
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
      }
      return void 0;
    };
  }
  var makePagedClientRequest, get;
  var init_createPaginator = __esm({
    "node_modules/@smithy/core/dist-es/pagination/createPaginator.js"() {
      makePagedClientRequest = async (CommandCtor, client, input, ...args) => {
        return await client.send(new CommandCtor(input), ...args);
      };
      get = (fromObject, path) => {
        let cursor = fromObject;
        const pathComponents = path.split(".");
        for (const step of pathComponents) {
          if (!cursor || typeof cursor !== "object") {
            return void 0;
          }
          cursor = cursor[step];
        }
        return cursor;
      };
    }
  });

  // node_modules/@smithy/core/dist-es/index.js
  var init_dist_es28 = __esm({
    "node_modules/@smithy/core/dist-es/index.js"() {
      init_middleware_http_auth_scheme();
      init_middleware_http_signing();
      init_util_identity_and_auth();
      init_getSmithyContext2();
      init_normalizeProvider2();
      init_requestBuilder();
      init_createPaginator();
    }
  });

  // node_modules/@smithy/middleware-content-length/dist-es/index.js
  function contentLengthMiddleware(bodyLengthChecker) {
    return (next) => async (args) => {
      const request = args.request;
      if (HttpRequest.isInstance(request)) {
        const { body, headers } = request;
        if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER) === -1) {
          try {
            const length = bodyLengthChecker(body);
            request.headers = {
              ...request.headers,
              [CONTENT_LENGTH_HEADER]: String(length)
            };
          } catch (error) {
          }
        }
      }
      return next({
        ...args,
        request
      });
    };
  }
  var CONTENT_LENGTH_HEADER, contentLengthMiddlewareOptions, getContentLengthPlugin;
  var init_dist_es29 = __esm({
    "node_modules/@smithy/middleware-content-length/dist-es/index.js"() {
      init_dist_es2();
      CONTENT_LENGTH_HEADER = "content-length";
      contentLengthMiddlewareOptions = {
        step: "build",
        tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
        name: "contentLengthMiddleware",
        override: true
      };
      getContentLengthPlugin = (options) => ({
        applyToStack: (clientStack) => {
          clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
        }
      });
    }
  });

  // node_modules/@aws-sdk/core/dist-es/client/emitWarningIfUnsupportedVersion.js
  var init_emitWarningIfUnsupportedVersion2 = __esm({
    "node_modules/@aws-sdk/core/dist-es/client/emitWarningIfUnsupportedVersion.js"() {
    }
  });

  // node_modules/@aws-sdk/core/dist-es/client/index.js
  var init_client3 = __esm({
    "node_modules/@aws-sdk/core/dist-es/client/index.js"() {
      init_emitWarningIfUnsupportedVersion2();
    }
  });

  // node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getDateHeader.js
  var getDateHeader;
  var init_getDateHeader = __esm({
    "node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getDateHeader.js"() {
      init_dist_es2();
      getDateHeader = (response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : void 0;
    }
  });

  // node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getSkewCorrectedDate.js
  var getSkewCorrectedDate;
  var init_getSkewCorrectedDate = __esm({
    "node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getSkewCorrectedDate.js"() {
      getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);
    }
  });

  // node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/isClockSkewed.js
  var isClockSkewed;
  var init_isClockSkewed = __esm({
    "node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/isClockSkewed.js"() {
      init_getSkewCorrectedDate();
      isClockSkewed = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5;
    }
  });

  // node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
  var getUpdatedSystemClockOffset;
  var init_getUpdatedSystemClockOffset = __esm({
    "node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js"() {
      init_isClockSkewed();
      getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
        const clockTimeInMs = Date.parse(clockTime);
        if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
          return clockTimeInMs - Date.now();
        }
        return currentSystemClockOffset;
      };
    }
  });

  // node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/index.js
  var init_utils2 = __esm({
    "node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/index.js"() {
      init_getDateHeader();
      init_getSkewCorrectedDate();
      init_getUpdatedSystemClockOffset();
    }
  });

  // node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
  var throwSigningPropertyError, validateSigningProperties, AwsSdkSigV4Signer;
  var init_AwsSdkSigV4Signer = __esm({
    "node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js"() {
      init_dist_es2();
      init_utils2();
      throwSigningPropertyError = (name, property) => {
        if (!property) {
          throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
        }
        return property;
      };
      validateSigningProperties = async (signingProperties) => {
        const context = throwSigningPropertyError("context", signingProperties.context);
        const config = throwSigningPropertyError("config", signingProperties.config);
        const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
        const signerFunction = throwSigningPropertyError("signer", config.signer);
        const signer = await signerFunction(authScheme);
        const signingRegion = signingProperties?.signingRegion;
        const signingName = signingProperties?.signingName;
        return {
          config,
          signer,
          signingRegion,
          signingName
        };
      };
      AwsSdkSigV4Signer = class {
        async sign(httpRequest, identity, signingProperties) {
          if (!HttpRequest.isInstance(httpRequest)) {
            throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
          }
          const { config, signer, signingRegion, signingName } = await validateSigningProperties(signingProperties);
          const signedRequest = await signer.sign(httpRequest, {
            signingDate: getSkewCorrectedDate(config.systemClockOffset),
            signingRegion,
            signingService: signingName
          });
          return signedRequest;
        }
        errorHandler(signingProperties) {
          return (error) => {
            const serverTime = error.ServerTime ?? getDateHeader(error.$response);
            if (serverTime) {
              const config = throwSigningPropertyError("config", signingProperties.config);
              const initialSystemClockOffset = config.systemClockOffset;
              config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
              const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;
              if (clockSkewCorrected && error.$metadata) {
                error.$metadata.clockSkewCorrected = true;
              }
            }
            throw error;
          };
        }
        successHandler(httpResponse, signingProperties) {
          const dateHeader = getDateHeader(httpResponse);
          if (dateHeader) {
            const config = throwSigningPropertyError("config", signingProperties.config);
            config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
          }
        }
      };
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/constants.js
  var ALGORITHM_QUERY_PARAM, CREDENTIAL_QUERY_PARAM, AMZ_DATE_QUERY_PARAM, SIGNED_HEADERS_QUERY_PARAM, EXPIRES_QUERY_PARAM, SIGNATURE_QUERY_PARAM, TOKEN_QUERY_PARAM, AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER, GENERATED_HEADERS, SIGNATURE_HEADER, SHA256_HEADER, TOKEN_HEADER, ALWAYS_UNSIGNABLE_HEADERS, PROXY_HEADER_PATTERN, SEC_HEADER_PATTERN, ALGORITHM_IDENTIFIER, EVENT_ALGORITHM_IDENTIFIER, UNSIGNED_PAYLOAD, MAX_CACHE_SIZE, KEY_TYPE_IDENTIFIER, MAX_PRESIGNED_TTL;
  var init_constants5 = __esm({
    "node_modules/@smithy/signature-v4/dist-es/constants.js"() {
      ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
      CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
      AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
      SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
      EXPIRES_QUERY_PARAM = "X-Amz-Expires";
      SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
      TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
      AUTH_HEADER = "authorization";
      AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
      DATE_HEADER = "date";
      GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
      SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
      SHA256_HEADER = "x-amz-content-sha256";
      TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
      ALWAYS_UNSIGNABLE_HEADERS = {
        authorization: true,
        "cache-control": true,
        connection: true,
        expect: true,
        from: true,
        "keep-alive": true,
        "max-forwards": true,
        pragma: true,
        referer: true,
        te: true,
        trailer: true,
        "transfer-encoding": true,
        upgrade: true,
        "user-agent": true,
        "x-amzn-trace-id": true
      };
      PROXY_HEADER_PATTERN = /^proxy-/;
      SEC_HEADER_PATTERN = /^sec-/;
      ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
      EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
      UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
      MAX_CACHE_SIZE = 50;
      KEY_TYPE_IDENTIFIER = "aws4_request";
      MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
  var signingKeyCache, cacheQueue, createScope, getSigningKey, hmac;
  var init_credentialDerivation = __esm({
    "node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js"() {
      init_dist_es24();
      init_dist_es19();
      init_constants5();
      signingKeyCache = {};
      cacheQueue = [];
      createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;
      getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
        const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
        const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
        if (cacheKey in signingKeyCache) {
          return signingKeyCache[cacheKey];
        }
        cacheQueue.push(cacheKey);
        while (cacheQueue.length > MAX_CACHE_SIZE) {
          delete signingKeyCache[cacheQueue.shift()];
        }
        let key = `AWS4${credentials.secretAccessKey}`;
        for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
          key = await hmac(sha256Constructor, key, signable);
        }
        return signingKeyCache[cacheKey] = key;
      };
      hmac = (ctor, secret, data) => {
        const hash = new ctor(secret);
        hash.update(toUint8Array(data));
        return hash.digest();
      };
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
  var getCanonicalHeaders;
  var init_getCanonicalHeaders = __esm({
    "node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js"() {
      init_constants5();
      getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
        const canonical = {};
        for (const headerName of Object.keys(headers).sort()) {
          if (headers[headerName] == void 0) {
            continue;
          }
          const canonicalHeaderName = headerName.toLowerCase();
          if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
            if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
              continue;
            }
          }
          canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
        }
        return canonical;
      };
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
  var getCanonicalQuery;
  var init_getCanonicalQuery = __esm({
    "node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js"() {
      init_dist_es21();
      init_constants5();
      getCanonicalQuery = ({ query = {} }) => {
        const keys = [];
        const serialized = {};
        for (const key of Object.keys(query).sort()) {
          if (key.toLowerCase() === SIGNATURE_HEADER) {
            continue;
          }
          keys.push(key);
          const value = query[key];
          if (typeof value === "string") {
            serialized[key] = `${escapeUri(key)}=${escapeUri(value)}`;
          } else if (Array.isArray(value)) {
            serialized[key] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${escapeUri(key)}=${escapeUri(value2)}`]), []).sort().join("&");
          }
        }
        return keys.map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
      };
    }
  });

  // node_modules/@smithy/is-array-buffer/dist-es/index.js
  var isArrayBuffer;
  var init_dist_es30 = __esm({
    "node_modules/@smithy/is-array-buffer/dist-es/index.js"() {
      isArrayBuffer = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
  var getPayloadHash;
  var init_getPayloadHash = __esm({
    "node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js"() {
      init_dist_es30();
      init_dist_es24();
      init_dist_es19();
      init_constants5();
      getPayloadHash = async ({ headers, body }, hashConstructor) => {
        for (const headerName of Object.keys(headers)) {
          if (headerName.toLowerCase() === SHA256_HEADER) {
            return headers[headerName];
          }
        }
        if (body == void 0) {
          return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
        } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
          const hashCtor = new hashConstructor();
          hashCtor.update(toUint8Array(body));
          return toHex(await hashCtor.digest());
        }
        return UNSIGNED_PAYLOAD;
      };
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js
  function negate(bytes) {
    for (let i3 = 0; i3 < 8; i3++) {
      bytes[i3] ^= 255;
    }
    for (let i3 = 7; i3 > -1; i3--) {
      bytes[i3]++;
      if (bytes[i3] !== 0)
        break;
    }
  }
  var HeaderFormatter, HEADER_VALUE_TYPE, UUID_PATTERN, Int64;
  var init_HeaderFormatter = __esm({
    "node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js"() {
      init_dist_es24();
      init_dist_es19();
      HeaderFormatter = class {
        format(headers) {
          const chunks = [];
          for (const headerName of Object.keys(headers)) {
            const bytes = fromUtf8(headerName);
            chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
          }
          const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
          let position = 0;
          for (const chunk of chunks) {
            out.set(chunk, position);
            position += chunk.byteLength;
          }
          return out;
        }
        formatHeaderValue(header) {
          switch (header.type) {
            case "boolean":
              return Uint8Array.from([header.value ? 0 : 1]);
            case "byte":
              return Uint8Array.from([2, header.value]);
            case "short":
              const shortView = new DataView(new ArrayBuffer(3));
              shortView.setUint8(0, 3);
              shortView.setInt16(1, header.value, false);
              return new Uint8Array(shortView.buffer);
            case "integer":
              const intView = new DataView(new ArrayBuffer(5));
              intView.setUint8(0, 4);
              intView.setInt32(1, header.value, false);
              return new Uint8Array(intView.buffer);
            case "long":
              const longBytes = new Uint8Array(9);
              longBytes[0] = 5;
              longBytes.set(header.value.bytes, 1);
              return longBytes;
            case "binary":
              const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
              binView.setUint8(0, 6);
              binView.setUint16(1, header.value.byteLength, false);
              const binBytes = new Uint8Array(binView.buffer);
              binBytes.set(header.value, 3);
              return binBytes;
            case "string":
              const utf8Bytes = fromUtf8(header.value);
              const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
              strView.setUint8(0, 7);
              strView.setUint16(1, utf8Bytes.byteLength, false);
              const strBytes = new Uint8Array(strView.buffer);
              strBytes.set(utf8Bytes, 3);
              return strBytes;
            case "timestamp":
              const tsBytes = new Uint8Array(9);
              tsBytes[0] = 8;
              tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
              return tsBytes;
            case "uuid":
              if (!UUID_PATTERN.test(header.value)) {
                throw new Error(`Invalid UUID received: ${header.value}`);
              }
              const uuidBytes = new Uint8Array(17);
              uuidBytes[0] = 9;
              uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
              return uuidBytes;
          }
        }
      };
      (function(HEADER_VALUE_TYPE2) {
        HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolTrue"] = 0] = "boolTrue";
        HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolFalse"] = 1] = "boolFalse";
        HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byte"] = 2] = "byte";
        HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["short"] = 3] = "short";
        HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["integer"] = 4] = "integer";
        HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["long"] = 5] = "long";
        HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byteArray"] = 6] = "byteArray";
        HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["string"] = 7] = "string";
        HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["timestamp"] = 8] = "timestamp";
        HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["uuid"] = 9] = "uuid";
      })(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
      UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
      Int64 = class _Int64 {
        constructor(bytes) {
          this.bytes = bytes;
          if (bytes.byteLength !== 8) {
            throw new Error("Int64 buffers must be exactly 8 bytes");
          }
        }
        static fromNumber(number) {
          if (number > 9223372036854776e3 || number < -9223372036854776e3) {
            throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
          }
          const bytes = new Uint8Array(8);
          for (let i3 = 7, remaining = Math.abs(Math.round(number)); i3 > -1 && remaining > 0; i3--, remaining /= 256) {
            bytes[i3] = remaining;
          }
          if (number < 0) {
            negate(bytes);
          }
          return new _Int64(bytes);
        }
        valueOf() {
          const bytes = this.bytes.slice(0);
          const negative = bytes[0] & 128;
          if (negative) {
            negate(bytes);
          }
          return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
        }
        toString() {
          return String(this.valueOf());
        }
      };
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/headerUtil.js
  var hasHeader;
  var init_headerUtil = __esm({
    "node_modules/@smithy/signature-v4/dist-es/headerUtil.js"() {
      hasHeader = (soughtHeader, headers) => {
        soughtHeader = soughtHeader.toLowerCase();
        for (const headerName of Object.keys(headers)) {
          if (soughtHeader === headerName.toLowerCase()) {
            return true;
          }
        }
        return false;
      };
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/cloneRequest.js
  var cloneRequest, cloneQuery2;
  var init_cloneRequest = __esm({
    "node_modules/@smithy/signature-v4/dist-es/cloneRequest.js"() {
      cloneRequest = ({ headers, query, ...rest }) => ({
        ...rest,
        headers: { ...headers },
        query: query ? cloneQuery2(query) : void 0
      });
      cloneQuery2 = (query) => Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
          ...carry,
          [paramName]: Array.isArray(param) ? [...param] : param
        };
      }, {});
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
  var moveHeadersToQuery;
  var init_moveHeadersToQuery = __esm({
    "node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js"() {
      init_cloneRequest();
      moveHeadersToQuery = (request, options = {}) => {
        const { headers, query = {} } = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
        for (const name of Object.keys(headers)) {
          const lname = name.toLowerCase();
          if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) {
            query[name] = headers[name];
            delete headers[name];
          }
        }
        return {
          ...request,
          headers,
          query
        };
      };
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
  var prepareRequest;
  var init_prepareRequest = __esm({
    "node_modules/@smithy/signature-v4/dist-es/prepareRequest.js"() {
      init_cloneRequest();
      init_constants5();
      prepareRequest = (request) => {
        request = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
        for (const headerName of Object.keys(request.headers)) {
          if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
            delete request.headers[headerName];
          }
        }
        return request;
      };
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/utilDate.js
  var iso8601, toDate;
  var init_utilDate = __esm({
    "node_modules/@smithy/signature-v4/dist-es/utilDate.js"() {
      iso8601 = (time) => toDate(time).toISOString().replace(/\.\d{3}Z$/, "Z");
      toDate = (time) => {
        if (typeof time === "number") {
          return new Date(time * 1e3);
        }
        if (typeof time === "string") {
          if (Number(time)) {
            return new Date(Number(time) * 1e3);
          }
          return new Date(time);
        }
        return time;
      };
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
  var SignatureV4, formatDate, getCanonicalHeaderList;
  var init_SignatureV4 = __esm({
    "node_modules/@smithy/signature-v4/dist-es/SignatureV4.js"() {
      init_dist_es24();
      init_dist_es10();
      init_dist_es21();
      init_dist_es19();
      init_constants5();
      init_credentialDerivation();
      init_getCanonicalHeaders();
      init_getCanonicalQuery();
      init_getPayloadHash();
      init_HeaderFormatter();
      init_headerUtil();
      init_moveHeadersToQuery();
      init_prepareRequest();
      init_utilDate();
      SignatureV4 = class {
        constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
          this.headerFormatter = new HeaderFormatter();
          this.service = service;
          this.sha256 = sha256;
          this.uriEscapePath = uriEscapePath;
          this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
          this.regionProvider = normalizeProvider(region);
          this.credentialProvider = normalizeProvider(credentials);
        }
        async presign(originalRequest, options = {}) {
          const { signingDate = /* @__PURE__ */ new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService } = options;
          const credentials = await this.credentialProvider();
          this.validateResolvedCredentials(credentials);
          const region = signingRegion ?? await this.regionProvider();
          const { longDate, shortDate } = formatDate(signingDate);
          if (expiresIn > MAX_PRESIGNED_TTL) {
            return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
          }
          const scope = createScope(shortDate, region, signingService ?? this.service);
          const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders });
          if (credentials.sessionToken) {
            request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
          }
          request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
          request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
          request.query[AMZ_DATE_QUERY_PARAM] = longDate;
          request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
          const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
          request.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
          request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
          return request;
        }
        async sign(toSign, options) {
          if (typeof toSign === "string") {
            return this.signString(toSign, options);
          } else if (toSign.headers && toSign.payload) {
            return this.signEvent(toSign, options);
          } else if (toSign.message) {
            return this.signMessage(toSign, options);
          } else {
            return this.signRequest(toSign, options);
          }
        }
        async signEvent({ headers, payload }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService }) {
          const region = signingRegion ?? await this.regionProvider();
          const { shortDate, longDate } = formatDate(signingDate);
          const scope = createScope(shortDate, region, signingService ?? this.service);
          const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
          const hash = new this.sha256();
          hash.update(headers);
          const hashedHeaders = toHex(await hash.digest());
          const stringToSign = [
            EVENT_ALGORITHM_IDENTIFIER,
            longDate,
            scope,
            priorSignature,
            hashedHeaders,
            hashedPayload
          ].join("\n");
          return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
        }
        async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService }) {
          const promise = this.signEvent({
            headers: this.headerFormatter.format(signableMessage.message.headers),
            payload: signableMessage.message.body
          }, {
            signingDate,
            signingRegion,
            signingService,
            priorSignature: signableMessage.priorSignature
          });
          return promise.then((signature) => {
            return { message: signableMessage.message, signature };
          });
        }
        async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService } = {}) {
          const credentials = await this.credentialProvider();
          this.validateResolvedCredentials(credentials);
          const region = signingRegion ?? await this.regionProvider();
          const { shortDate } = formatDate(signingDate);
          const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
          hash.update(toUint8Array(stringToSign));
          return toHex(await hash.digest());
        }
        async signRequest(requestToSign, { signingDate = /* @__PURE__ */ new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
          const credentials = await this.credentialProvider();
          this.validateResolvedCredentials(credentials);
          const region = signingRegion ?? await this.regionProvider();
          const request = prepareRequest(requestToSign);
          const { longDate, shortDate } = formatDate(signingDate);
          const scope = createScope(shortDate, region, signingService ?? this.service);
          request.headers[AMZ_DATE_HEADER] = longDate;
          if (credentials.sessionToken) {
            request.headers[TOKEN_HEADER] = credentials.sessionToken;
          }
          const payloadHash = await getPayloadHash(request, this.sha256);
          if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
            request.headers[SHA256_HEADER] = payloadHash;
          }
          const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
          const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
          request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
          return request;
        }
        createCanonicalRequest(request, canonicalHeaders, payloadHash) {
          const sortedHeaders = Object.keys(canonicalHeaders).sort();
          return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
        }
        async createStringToSign(longDate, credentialScope, canonicalRequest) {
          const hash = new this.sha256();
          hash.update(toUint8Array(canonicalRequest));
          const hashedRequest = await hash.digest();
          return `${ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
        }
        getCanonicalPath({ path }) {
          if (this.uriEscapePath) {
            const normalizedPathSegments = [];
            for (const pathSegment of path.split("/")) {
              if (pathSegment?.length === 0)
                continue;
              if (pathSegment === ".")
                continue;
              if (pathSegment === "..") {
                normalizedPathSegments.pop();
              } else {
                normalizedPathSegments.push(pathSegment);
              }
            }
            const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
            const doubleEncoded = escapeUri(normalizedPath);
            return doubleEncoded.replace(/%2F/g, "/");
          }
          return path;
        }
        async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
          const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
          const hash = new this.sha256(await keyPromise);
          hash.update(toUint8Array(stringToSign));
          return toHex(await hash.digest());
        }
        getSigningKey(credentials, region, shortDate, service) {
          return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
        }
        validateResolvedCredentials(credentials) {
          if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
            throw new Error("Resolved credential object is not valid");
          }
        }
      };
      formatDate = (now) => {
        const longDate = iso8601(now).replace(/[\-:]/g, "");
        return {
          longDate,
          shortDate: longDate.slice(0, 8)
        };
      };
      getCanonicalHeaderList = (headers) => Object.keys(headers).sort().join(";");
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/index.js
  var init_dist_es31 = __esm({
    "node_modules/@smithy/signature-v4/dist-es/index.js"() {
      init_SignatureV4();
      init_getCanonicalHeaders();
      init_getCanonicalQuery();
      init_getPayloadHash();
      init_moveHeadersToQuery();
      init_prepareRequest();
      init_credentialDerivation();
    }
  });

  // node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
  var resolveAwsSdkSigV4Config;
  var init_resolveAwsSdkSigV4Config = __esm({
    "node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js"() {
      init_dist_es28();
      init_dist_es31();
      resolveAwsSdkSigV4Config = (config) => {
        let normalizedCreds;
        if (config.credentials) {
          normalizedCreds = memoizeIdentityProvider(config.credentials, isIdentityExpired, doesIdentityRequireRefresh);
        }
        if (!normalizedCreds) {
          if (config.credentialDefaultProvider) {
            normalizedCreds = normalizeProvider2(config.credentialDefaultProvider(Object.assign({}, config, {
              parentClientConfig: config
            })));
          } else {
            normalizedCreds = async () => {
              throw new Error("`credentials` is missing");
            };
          }
        }
        const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256 } = config;
        let signer;
        if (config.signer) {
          signer = normalizeProvider2(config.signer);
        } else if (config.regionInfoProvider) {
          signer = () => normalizeProvider2(config.region)().then(async (region) => [
            await config.regionInfoProvider(region, {
              useFipsEndpoint: await config.useFipsEndpoint(),
              useDualstackEndpoint: await config.useDualstackEndpoint()
            }) || {},
            region
          ]).then(([regionInfo, region]) => {
            const { signingRegion, signingService } = regionInfo;
            config.signingRegion = config.signingRegion || signingRegion || region;
            config.signingName = config.signingName || signingService || config.serviceId;
            const params = {
              ...config,
              credentials: normalizedCreds,
              region: config.signingRegion,
              service: config.signingName,
              sha256,
              uriEscapePath: signingEscapePath
            };
            const SignerCtor = config.signerConstructor || SignatureV4;
            return new SignerCtor(params);
          });
        } else {
          signer = async (authScheme) => {
            authScheme = Object.assign({}, {
              name: "sigv4",
              signingName: config.signingName || config.defaultSigningName,
              signingRegion: await normalizeProvider2(config.region)(),
              properties: {}
            }, authScheme);
            const signingRegion = authScheme.signingRegion;
            const signingService = authScheme.signingName;
            config.signingRegion = config.signingRegion || signingRegion;
            config.signingName = config.signingName || signingService || config.serviceId;
            const params = {
              ...config,
              credentials: normalizedCreds,
              region: config.signingRegion,
              service: config.signingName,
              sha256,
              uriEscapePath: signingEscapePath
            };
            const SignerCtor = config.signerConstructor || SignatureV4;
            return new SignerCtor(params);
          };
        }
        return {
          ...config,
          systemClockOffset,
          signingEscapePath,
          credentials: normalizedCreds,
          signer
        };
      };
    }
  });

  // node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/index.js
  var init_aws_sdk = __esm({
    "node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/index.js"() {
      init_AwsSdkSigV4Signer();
      init_resolveAwsSdkSigV4Config();
    }
  });

  // node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/index.js
  var init_httpAuthSchemes2 = __esm({
    "node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/index.js"() {
      init_aws_sdk();
    }
  });

  // node_modules/@aws-sdk/core/dist-es/protocols/coercing-serializers.js
  var init_coercing_serializers = __esm({
    "node_modules/@aws-sdk/core/dist-es/protocols/coercing-serializers.js"() {
    }
  });

  // node_modules/@aws-sdk/core/dist-es/protocols/json/awsExpectUnion.js
  var awsExpectUnion;
  var init_awsExpectUnion = __esm({
    "node_modules/@aws-sdk/core/dist-es/protocols/json/awsExpectUnion.js"() {
      init_dist_es26();
      awsExpectUnion = (value) => {
        if (value == null) {
          return void 0;
        }
        if (typeof value === "object" && "__type" in value) {
          delete value.__type;
        }
        return expectUnion(value);
      };
    }
  });

  // node_modules/@aws-sdk/core/dist-es/protocols/common.js
  var collectBodyString;
  var init_common = __esm({
    "node_modules/@aws-sdk/core/dist-es/protocols/common.js"() {
      init_dist_es26();
      collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
    }
  });

  // node_modules/@aws-sdk/core/dist-es/protocols/json/parseJsonBody.js
  var parseJsonBody, parseJsonErrorBody, loadRestJsonErrorCode;
  var init_parseJsonBody = __esm({
    "node_modules/@aws-sdk/core/dist-es/protocols/json/parseJsonBody.js"() {
      init_common();
      parseJsonBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
        if (encoded.length) {
          try {
            return JSON.parse(encoded);
          } catch (e3) {
            if (e3?.name === "SyntaxError") {
              Object.defineProperty(e3, "$responseBodyText", {
                value: encoded
              });
            }
            throw e3;
          }
        }
        return {};
      });
      parseJsonErrorBody = async (errorBody, context) => {
        const value = await parseJsonBody(errorBody, context);
        value.message = value.message ?? value.Message;
        return value;
      };
      loadRestJsonErrorCode = (output, data) => {
        const findKey2 = (object, key) => Object.keys(object).find((k3) => k3.toLowerCase() === key.toLowerCase());
        const sanitizeErrorCode = (rawValue) => {
          let cleanValue = rawValue;
          if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
          }
          if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
          }
          if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
          }
          if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
          }
          return cleanValue;
        };
        const headerKey = findKey2(output.headers, "x-amzn-errortype");
        if (headerKey !== void 0) {
          return sanitizeErrorCode(output.headers[headerKey]);
        }
        if (data.code !== void 0) {
          return sanitizeErrorCode(data.code);
        }
        if (data["__type"] !== void 0) {
          return sanitizeErrorCode(data["__type"]);
        }
      };
    }
  });

  // node_modules/fast-xml-parser/src/util.js
  var require_util = __commonJS({
    "node_modules/fast-xml-parser/src/util.js"(exports) {
      "use strict";
      var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
      var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
      var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
      var regexName = new RegExp("^" + nameRegexp + "$");
      var getAllMatches = function(string, regex) {
        const matches = [];
        let match2 = regex.exec(string);
        while (match2) {
          const allmatches = [];
          allmatches.startIndex = regex.lastIndex - match2[0].length;
          const len = match2.length;
          for (let index = 0; index < len; index++) {
            allmatches.push(match2[index]);
          }
          matches.push(allmatches);
          match2 = regex.exec(string);
        }
        return matches;
      };
      var isName = function(string) {
        const match2 = regexName.exec(string);
        return !(match2 === null || typeof match2 === "undefined");
      };
      exports.isExist = function(v3) {
        return typeof v3 !== "undefined";
      };
      exports.isEmptyObject = function(obj) {
        return Object.keys(obj).length === 0;
      };
      exports.merge = function(target, a3, arrayMode) {
        if (a3) {
          const keys = Object.keys(a3);
          const len = keys.length;
          for (let i3 = 0; i3 < len; i3++) {
            if (arrayMode === "strict") {
              target[keys[i3]] = [a3[keys[i3]]];
            } else {
              target[keys[i3]] = a3[keys[i3]];
            }
          }
        }
      };
      exports.getValue = function(v3) {
        if (exports.isExist(v3)) {
          return v3;
        } else {
          return "";
        }
      };
      exports.isName = isName;
      exports.getAllMatches = getAllMatches;
      exports.nameRegexp = nameRegexp;
    }
  });

  // node_modules/fast-xml-parser/src/validator.js
  var require_validator = __commonJS({
    "node_modules/fast-xml-parser/src/validator.js"(exports) {
      "use strict";
      var util = require_util();
      var defaultOptions2 = {
        allowBooleanAttributes: false,
        //A tag can have attributes without any value
        unpairedTags: []
      };
      exports.validate = function(xmlData, options) {
        options = Object.assign({}, defaultOptions2, options);
        const tags = [];
        let tagFound = false;
        let reachedRoot = false;
        if (xmlData[0] === "\uFEFF") {
          xmlData = xmlData.substr(1);
        }
        for (let i3 = 0; i3 < xmlData.length; i3++) {
          if (xmlData[i3] === "<" && xmlData[i3 + 1] === "?") {
            i3 += 2;
            i3 = readPI(xmlData, i3);
            if (i3.err) return i3;
          } else if (xmlData[i3] === "<") {
            let tagStartPos = i3;
            i3++;
            if (xmlData[i3] === "!") {
              i3 = readCommentAndCDATA(xmlData, i3);
              continue;
            } else {
              let closingTag = false;
              if (xmlData[i3] === "/") {
                closingTag = true;
                i3++;
              }
              let tagName = "";
              for (; i3 < xmlData.length && xmlData[i3] !== ">" && xmlData[i3] !== " " && xmlData[i3] !== "	" && xmlData[i3] !== "\n" && xmlData[i3] !== "\r"; i3++) {
                tagName += xmlData[i3];
              }
              tagName = tagName.trim();
              if (tagName[tagName.length - 1] === "/") {
                tagName = tagName.substring(0, tagName.length - 1);
                i3--;
              }
              if (!validateTagName(tagName)) {
                let msg;
                if (tagName.trim().length === 0) {
                  msg = "Invalid space after '<'.";
                } else {
                  msg = "Tag '" + tagName + "' is an invalid name.";
                }
                return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i3));
              }
              const result = readAttributeStr(xmlData, i3);
              if (result === false) {
                return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i3));
              }
              let attrStr = result.value;
              i3 = result.index;
              if (attrStr[attrStr.length - 1] === "/") {
                const attrStrStart = i3 - attrStr.length;
                attrStr = attrStr.substring(0, attrStr.length - 1);
                const isValid = validateAttributeString(attrStr, options);
                if (isValid === true) {
                  tagFound = true;
                } else {
                  return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
                }
              } else if (closingTag) {
                if (!result.tagClosed) {
                  return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i3));
                } else if (attrStr.trim().length > 0) {
                  return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
                } else {
                  const otg = tags.pop();
                  if (tagName !== otg.tagName) {
                    let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                    return getErrorObject(
                      "InvalidTag",
                      "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                      getLineNumberForPosition(xmlData, tagStartPos)
                    );
                  }
                  if (tags.length == 0) {
                    reachedRoot = true;
                  }
                }
              } else {
                const isValid = validateAttributeString(attrStr, options);
                if (isValid !== true) {
                  return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i3 - attrStr.length + isValid.err.line));
                }
                if (reachedRoot === true) {
                  return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i3));
                } else if (options.unpairedTags.indexOf(tagName) !== -1) {
                } else {
                  tags.push({ tagName, tagStartPos });
                }
                tagFound = true;
              }
              for (i3++; i3 < xmlData.length; i3++) {
                if (xmlData[i3] === "<") {
                  if (xmlData[i3 + 1] === "!") {
                    i3++;
                    i3 = readCommentAndCDATA(xmlData, i3);
                    continue;
                  } else if (xmlData[i3 + 1] === "?") {
                    i3 = readPI(xmlData, ++i3);
                    if (i3.err) return i3;
                  } else {
                    break;
                  }
                } else if (xmlData[i3] === "&") {
                  const afterAmp = validateAmpersand(xmlData, i3);
                  if (afterAmp == -1)
                    return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i3));
                  i3 = afterAmp;
                } else {
                  if (reachedRoot === true && !isWhiteSpace(xmlData[i3])) {
                    return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i3));
                  }
                }
              }
              if (xmlData[i3] === "<") {
                i3--;
              }
            }
          } else {
            if (isWhiteSpace(xmlData[i3])) {
              continue;
            }
            return getErrorObject("InvalidChar", "char '" + xmlData[i3] + "' is not expected.", getLineNumberForPosition(xmlData, i3));
          }
        }
        if (!tagFound) {
          return getErrorObject("InvalidXml", "Start tag expected.", 1);
        } else if (tags.length == 1) {
          return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
        } else if (tags.length > 0) {
          return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t3) => t3.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
        }
        return true;
      };
      function isWhiteSpace(char) {
        return char === " " || char === "	" || char === "\n" || char === "\r";
      }
      function readPI(xmlData, i3) {
        const start = i3;
        for (; i3 < xmlData.length; i3++) {
          if (xmlData[i3] == "?" || xmlData[i3] == " ") {
            const tagname = xmlData.substr(start, i3 - start);
            if (i3 > 5 && tagname === "xml") {
              return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i3));
            } else if (xmlData[i3] == "?" && xmlData[i3 + 1] == ">") {
              i3++;
              break;
            } else {
              continue;
            }
          }
        }
        return i3;
      }
      function readCommentAndCDATA(xmlData, i3) {
        if (xmlData.length > i3 + 5 && xmlData[i3 + 1] === "-" && xmlData[i3 + 2] === "-") {
          for (i3 += 3; i3 < xmlData.length; i3++) {
            if (xmlData[i3] === "-" && xmlData[i3 + 1] === "-" && xmlData[i3 + 2] === ">") {
              i3 += 2;
              break;
            }
          }
        } else if (xmlData.length > i3 + 8 && xmlData[i3 + 1] === "D" && xmlData[i3 + 2] === "O" && xmlData[i3 + 3] === "C" && xmlData[i3 + 4] === "T" && xmlData[i3 + 5] === "Y" && xmlData[i3 + 6] === "P" && xmlData[i3 + 7] === "E") {
          let angleBracketsCount = 1;
          for (i3 += 8; i3 < xmlData.length; i3++) {
            if (xmlData[i3] === "<") {
              angleBracketsCount++;
            } else if (xmlData[i3] === ">") {
              angleBracketsCount--;
              if (angleBracketsCount === 0) {
                break;
              }
            }
          }
        } else if (xmlData.length > i3 + 9 && xmlData[i3 + 1] === "[" && xmlData[i3 + 2] === "C" && xmlData[i3 + 3] === "D" && xmlData[i3 + 4] === "A" && xmlData[i3 + 5] === "T" && xmlData[i3 + 6] === "A" && xmlData[i3 + 7] === "[") {
          for (i3 += 8; i3 < xmlData.length; i3++) {
            if (xmlData[i3] === "]" && xmlData[i3 + 1] === "]" && xmlData[i3 + 2] === ">") {
              i3 += 2;
              break;
            }
          }
        }
        return i3;
      }
      var doubleQuote = '"';
      var singleQuote = "'";
      function readAttributeStr(xmlData, i3) {
        let attrStr = "";
        let startChar = "";
        let tagClosed = false;
        for (; i3 < xmlData.length; i3++) {
          if (xmlData[i3] === doubleQuote || xmlData[i3] === singleQuote) {
            if (startChar === "") {
              startChar = xmlData[i3];
            } else if (startChar !== xmlData[i3]) {
            } else {
              startChar = "";
            }
          } else if (xmlData[i3] === ">") {
            if (startChar === "") {
              tagClosed = true;
              break;
            }
          }
          attrStr += xmlData[i3];
        }
        if (startChar !== "") {
          return false;
        }
        return {
          value: attrStr,
          index: i3,
          tagClosed
        };
      }
      var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
      function validateAttributeString(attrStr, options) {
        const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
        const attrNames = {};
        for (let i3 = 0; i3 < matches.length; i3++) {
          if (matches[i3][1].length === 0) {
            return getErrorObject("InvalidAttr", "Attribute '" + matches[i3][2] + "' has no space in starting.", getPositionFromMatch(matches[i3]));
          } else if (matches[i3][3] !== void 0 && matches[i3][4] === void 0) {
            return getErrorObject("InvalidAttr", "Attribute '" + matches[i3][2] + "' is without value.", getPositionFromMatch(matches[i3]));
          } else if (matches[i3][3] === void 0 && !options.allowBooleanAttributes) {
            return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i3][2] + "' is not allowed.", getPositionFromMatch(matches[i3]));
          }
          const attrName = matches[i3][2];
          if (!validateAttrName(attrName)) {
            return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i3]));
          }
          if (!attrNames.hasOwnProperty(attrName)) {
            attrNames[attrName] = 1;
          } else {
            return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i3]));
          }
        }
        return true;
      }
      function validateNumberAmpersand(xmlData, i3) {
        let re = /\d/;
        if (xmlData[i3] === "x") {
          i3++;
          re = /[\da-fA-F]/;
        }
        for (; i3 < xmlData.length; i3++) {
          if (xmlData[i3] === ";")
            return i3;
          if (!xmlData[i3].match(re))
            break;
        }
        return -1;
      }
      function validateAmpersand(xmlData, i3) {
        i3++;
        if (xmlData[i3] === ";")
          return -1;
        if (xmlData[i3] === "#") {
          i3++;
          return validateNumberAmpersand(xmlData, i3);
        }
        let count = 0;
        for (; i3 < xmlData.length; i3++, count++) {
          if (xmlData[i3].match(/\w/) && count < 20)
            continue;
          if (xmlData[i3] === ";")
            break;
          return -1;
        }
        return i3;
      }
      function getErrorObject(code, message, lineNumber) {
        return {
          err: {
            code,
            msg: message,
            line: lineNumber.line || lineNumber,
            col: lineNumber.col
          }
        };
      }
      function validateAttrName(attrName) {
        return util.isName(attrName);
      }
      function validateTagName(tagname) {
        return util.isName(tagname);
      }
      function getLineNumberForPosition(xmlData, index) {
        const lines = xmlData.substring(0, index).split(/\r?\n/);
        return {
          line: lines.length,
          // column number is last line's length + 1, because column numbering starts at 1:
          col: lines[lines.length - 1].length + 1
        };
      }
      function getPositionFromMatch(match2) {
        return match2.startIndex + match2[1].length;
      }
    }
  });

  // node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
  var require_OptionsBuilder = __commonJS({
    "node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"(exports) {
      var defaultOptions2 = {
        preserveOrder: false,
        attributeNamePrefix: "@_",
        attributesGroupName: false,
        textNodeName: "#text",
        ignoreAttributes: true,
        removeNSPrefix: false,
        // remove NS from tag name or attribute name if true
        allowBooleanAttributes: false,
        //a tag can have attributes without any value
        //ignoreRootElement : false,
        parseTagValue: true,
        parseAttributeValue: false,
        trimValues: true,
        //Trim string values of tag and attributes
        cdataPropName: false,
        numberParseOptions: {
          hex: true,
          leadingZeros: true,
          eNotation: true
        },
        tagValueProcessor: function(tagName, val2) {
          return val2;
        },
        attributeValueProcessor: function(attrName, val2) {
          return val2;
        },
        stopNodes: [],
        //nested tags will not be parsed even for errors
        alwaysCreateTextNode: false,
        isArray: () => false,
        commentPropName: false,
        unpairedTags: [],
        processEntities: true,
        htmlEntities: false,
        ignoreDeclaration: false,
        ignorePiTags: false,
        transformTagName: false,
        transformAttributeName: false,
        updateTag: function(tagName, jPath, attrs) {
          return tagName;
        }
        // skipEmptyListItem: false
      };
      var buildOptions = function(options) {
        return Object.assign({}, defaultOptions2, options);
      };
      exports.buildOptions = buildOptions;
      exports.defaultOptions = defaultOptions2;
    }
  });

  // node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
  var require_xmlNode = __commonJS({
    "node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"(exports, module) {
      "use strict";
      var XmlNode = class {
        constructor(tagname) {
          this.tagname = tagname;
          this.child = [];
          this[":@"] = {};
        }
        add(key, val2) {
          if (key === "__proto__") key = "#__proto__";
          this.child.push({ [key]: val2 });
        }
        addChild(node) {
          if (node.tagname === "__proto__") node.tagname = "#__proto__";
          if (node[":@"] && Object.keys(node[":@"]).length > 0) {
            this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
          } else {
            this.child.push({ [node.tagname]: node.child });
          }
        }
      };
      module.exports = XmlNode;
    }
  });

  // node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
  var require_DocTypeReader = __commonJS({
    "node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"(exports, module) {
      var util = require_util();
      function readDocType(xmlData, i3) {
        const entities = {};
        if (xmlData[i3 + 3] === "O" && xmlData[i3 + 4] === "C" && xmlData[i3 + 5] === "T" && xmlData[i3 + 6] === "Y" && xmlData[i3 + 7] === "P" && xmlData[i3 + 8] === "E") {
          i3 = i3 + 9;
          let angleBracketsCount = 1;
          let hasBody = false, comment = false;
          let exp = "";
          for (; i3 < xmlData.length; i3++) {
            if (xmlData[i3] === "<" && !comment) {
              if (hasBody && isEntity(xmlData, i3)) {
                i3 += 7;
                [entityName, val, i3] = readEntityExp(xmlData, i3 + 1);
                if (val.indexOf("&") === -1)
                  entities[validateEntityName(entityName)] = {
                    regx: RegExp(`&${entityName};`, "g"),
                    val
                  };
              } else if (hasBody && isElement(xmlData, i3)) i3 += 8;
              else if (hasBody && isAttlist(xmlData, i3)) i3 += 8;
              else if (hasBody && isNotation(xmlData, i3)) i3 += 9;
              else if (isComment) comment = true;
              else throw new Error("Invalid DOCTYPE");
              angleBracketsCount++;
              exp = "";
            } else if (xmlData[i3] === ">") {
              if (comment) {
                if (xmlData[i3 - 1] === "-" && xmlData[i3 - 2] === "-") {
                  comment = false;
                  angleBracketsCount--;
                }
              } else {
                angleBracketsCount--;
              }
              if (angleBracketsCount === 0) {
                break;
              }
            } else if (xmlData[i3] === "[") {
              hasBody = true;
            } else {
              exp += xmlData[i3];
            }
          }
          if (angleBracketsCount !== 0) {
            throw new Error(`Unclosed DOCTYPE`);
          }
        } else {
          throw new Error(`Invalid Tag instead of DOCTYPE`);
        }
        return { entities, i: i3 };
      }
      function readEntityExp(xmlData, i3) {
        let entityName2 = "";
        for (; i3 < xmlData.length && (xmlData[i3] !== "'" && xmlData[i3] !== '"'); i3++) {
          entityName2 += xmlData[i3];
        }
        entityName2 = entityName2.trim();
        if (entityName2.indexOf(" ") !== -1) throw new Error("External entites are not supported");
        const startChar = xmlData[i3++];
        let val2 = "";
        for (; i3 < xmlData.length && xmlData[i3] !== startChar; i3++) {
          val2 += xmlData[i3];
        }
        return [entityName2, val2, i3];
      }
      function isComment(xmlData, i3) {
        if (xmlData[i3 + 1] === "!" && xmlData[i3 + 2] === "-" && xmlData[i3 + 3] === "-") return true;
        return false;
      }
      function isEntity(xmlData, i3) {
        if (xmlData[i3 + 1] === "!" && xmlData[i3 + 2] === "E" && xmlData[i3 + 3] === "N" && xmlData[i3 + 4] === "T" && xmlData[i3 + 5] === "I" && xmlData[i3 + 6] === "T" && xmlData[i3 + 7] === "Y") return true;
        return false;
      }
      function isElement(xmlData, i3) {
        if (xmlData[i3 + 1] === "!" && xmlData[i3 + 2] === "E" && xmlData[i3 + 3] === "L" && xmlData[i3 + 4] === "E" && xmlData[i3 + 5] === "M" && xmlData[i3 + 6] === "E" && xmlData[i3 + 7] === "N" && xmlData[i3 + 8] === "T") return true;
        return false;
      }
      function isAttlist(xmlData, i3) {
        if (xmlData[i3 + 1] === "!" && xmlData[i3 + 2] === "A" && xmlData[i3 + 3] === "T" && xmlData[i3 + 4] === "T" && xmlData[i3 + 5] === "L" && xmlData[i3 + 6] === "I" && xmlData[i3 + 7] === "S" && xmlData[i3 + 8] === "T") return true;
        return false;
      }
      function isNotation(xmlData, i3) {
        if (xmlData[i3 + 1] === "!" && xmlData[i3 + 2] === "N" && xmlData[i3 + 3] === "O" && xmlData[i3 + 4] === "T" && xmlData[i3 + 5] === "A" && xmlData[i3 + 6] === "T" && xmlData[i3 + 7] === "I" && xmlData[i3 + 8] === "O" && xmlData[i3 + 9] === "N") return true;
        return false;
      }
      function validateEntityName(name) {
        if (util.isName(name))
          return name;
        else
          throw new Error(`Invalid entity name ${name}`);
      }
      module.exports = readDocType;
    }
  });

  // node_modules/strnum/strnum.js
  var require_strnum = __commonJS({
    "node_modules/strnum/strnum.js"(exports, module) {
      var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
      var numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
      if (!Number.parseInt && window.parseInt) {
        Number.parseInt = window.parseInt;
      }
      if (!Number.parseFloat && window.parseFloat) {
        Number.parseFloat = window.parseFloat;
      }
      var consider = {
        hex: true,
        leadingZeros: true,
        decimalPoint: ".",
        eNotation: true
        //skipLike: /regex/
      };
      function toNumber(str, options = {}) {
        options = Object.assign({}, consider, options);
        if (!str || typeof str !== "string") return str;
        let trimmedStr = str.trim();
        if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr)) return str;
        else if (options.hex && hexRegex.test(trimmedStr)) {
          return Number.parseInt(trimmedStr, 16);
        } else {
          const match2 = numRegex.exec(trimmedStr);
          if (match2) {
            const sign = match2[1];
            const leadingZeros = match2[2];
            let numTrimmedByZeros = trimZeros(match2[3]);
            const eNotation = match2[4] || match2[6];
            if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".") return str;
            else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".") return str;
            else {
              const num = Number(trimmedStr);
              const numStr = "" + num;
              if (numStr.search(/[eE]/) !== -1) {
                if (options.eNotation) return num;
                else return str;
              } else if (eNotation) {
                if (options.eNotation) return num;
                else return str;
              } else if (trimmedStr.indexOf(".") !== -1) {
                if (numStr === "0" && numTrimmedByZeros === "") return num;
                else if (numStr === numTrimmedByZeros) return num;
                else if (sign && numStr === "-" + numTrimmedByZeros) return num;
                else return str;
              }
              if (leadingZeros) {
                if (numTrimmedByZeros === numStr) return num;
                else if (sign + numTrimmedByZeros === numStr) return num;
                else return str;
              }
              if (trimmedStr === numStr) return num;
              else if (trimmedStr === sign + numStr) return num;
              return str;
            }
          } else {
            return str;
          }
        }
      }
      function trimZeros(numStr) {
        if (numStr && numStr.indexOf(".") !== -1) {
          numStr = numStr.replace(/0+$/, "");
          if (numStr === ".") numStr = "0";
          else if (numStr[0] === ".") numStr = "0" + numStr;
          else if (numStr[numStr.length - 1] === ".") numStr = numStr.substr(0, numStr.length - 1);
          return numStr;
        }
        return numStr;
      }
      module.exports = toNumber;
    }
  });

  // node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
  var require_OrderedObjParser = __commonJS({
    "node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"(exports, module) {
      "use strict";
      var util = require_util();
      var xmlNode = require_xmlNode();
      var readDocType = require_DocTypeReader();
      var toNumber = require_strnum();
      var regx = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, util.nameRegexp);
      var OrderedObjParser = class {
        constructor(options) {
          this.options = options;
          this.currentNode = null;
          this.tagsNodeStack = [];
          this.docTypeEntities = {};
          this.lastEntities = {
            "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
            "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
            "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
            "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
          };
          this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
          this.htmlEntities = {
            "space": { regex: /&(nbsp|#160);/g, val: " " },
            // "lt" : { regex: /&(lt|#60);/g, val: "<" },
            // "gt" : { regex: /&(gt|#62);/g, val: ">" },
            // "amp" : { regex: /&(amp|#38);/g, val: "&" },
            // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
            // "apos" : { regex: /&(apos|#39);/g, val: "'" },
            "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
            "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
            "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
            "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
            "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
            "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
            "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" }
          };
          this.addExternalEntities = addExternalEntities;
          this.parseXml = parseXml;
          this.parseTextData = parseTextData;
          this.resolveNameSpace = resolveNameSpace;
          this.buildAttributesMap = buildAttributesMap;
          this.isItStopNode = isItStopNode;
          this.replaceEntitiesValue = replaceEntitiesValue;
          this.readStopNodeData = readStopNodeData;
          this.saveTextToParentTag = saveTextToParentTag;
          this.addChild = addChild;
        }
      };
      function addExternalEntities(externalEntities) {
        const entKeys = Object.keys(externalEntities);
        for (let i3 = 0; i3 < entKeys.length; i3++) {
          const ent = entKeys[i3];
          this.lastEntities[ent] = {
            regex: new RegExp("&" + ent + ";", "g"),
            val: externalEntities[ent]
          };
        }
      }
      function parseTextData(val2, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
        if (val2 !== void 0) {
          if (this.options.trimValues && !dontTrim) {
            val2 = val2.trim();
          }
          if (val2.length > 0) {
            if (!escapeEntities) val2 = this.replaceEntitiesValue(val2);
            const newval = this.options.tagValueProcessor(tagName, val2, jPath, hasAttributes, isLeafNode);
            if (newval === null || newval === void 0) {
              return val2;
            } else if (typeof newval !== typeof val2 || newval !== val2) {
              return newval;
            } else if (this.options.trimValues) {
              return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
            } else {
              const trimmedVal = val2.trim();
              if (trimmedVal === val2) {
                return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
              } else {
                return val2;
              }
            }
          }
        }
      }
      function resolveNameSpace(tagname) {
        if (this.options.removeNSPrefix) {
          const tags = tagname.split(":");
          const prefix = tagname.charAt(0) === "/" ? "/" : "";
          if (tags[0] === "xmlns") {
            return "";
          }
          if (tags.length === 2) {
            tagname = prefix + tags[1];
          }
        }
        return tagname;
      }
      var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
      function buildAttributesMap(attrStr, jPath, tagName) {
        if (!this.options.ignoreAttributes && typeof attrStr === "string") {
          const matches = util.getAllMatches(attrStr, attrsRegx);
          const len = matches.length;
          const attrs = {};
          for (let i3 = 0; i3 < len; i3++) {
            const attrName = this.resolveNameSpace(matches[i3][1]);
            let oldVal = matches[i3][4];
            let aName = this.options.attributeNamePrefix + attrName;
            if (attrName.length) {
              if (this.options.transformAttributeName) {
                aName = this.options.transformAttributeName(aName);
              }
              if (aName === "__proto__") aName = "#__proto__";
              if (oldVal !== void 0) {
                if (this.options.trimValues) {
                  oldVal = oldVal.trim();
                }
                oldVal = this.replaceEntitiesValue(oldVal);
                const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
                if (newVal === null || newVal === void 0) {
                  attrs[aName] = oldVal;
                } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                  attrs[aName] = newVal;
                } else {
                  attrs[aName] = parseValue(
                    oldVal,
                    this.options.parseAttributeValue,
                    this.options.numberParseOptions
                  );
                }
              } else if (this.options.allowBooleanAttributes) {
                attrs[aName] = true;
              }
            }
          }
          if (!Object.keys(attrs).length) {
            return;
          }
          if (this.options.attributesGroupName) {
            const attrCollection = {};
            attrCollection[this.options.attributesGroupName] = attrs;
            return attrCollection;
          }
          return attrs;
        }
      }
      var parseXml = function(xmlData) {
        xmlData = xmlData.replace(/\r\n?/g, "\n");
        const xmlObj = new xmlNode("!xml");
        let currentNode = xmlObj;
        let textData = "";
        let jPath = "";
        for (let i3 = 0; i3 < xmlData.length; i3++) {
          const ch = xmlData[i3];
          if (ch === "<") {
            if (xmlData[i3 + 1] === "/") {
              const closeIndex = findClosingIndex(xmlData, ">", i3, "Closing Tag is not closed.");
              let tagName = xmlData.substring(i3 + 2, closeIndex).trim();
              if (this.options.removeNSPrefix) {
                const colonIndex = tagName.indexOf(":");
                if (colonIndex !== -1) {
                  tagName = tagName.substr(colonIndex + 1);
                }
              }
              if (this.options.transformTagName) {
                tagName = this.options.transformTagName(tagName);
              }
              if (currentNode) {
                textData = this.saveTextToParentTag(textData, currentNode, jPath);
              }
              const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
              if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
                throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
              }
              let propIndex = 0;
              if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
                propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
                this.tagsNodeStack.pop();
              } else {
                propIndex = jPath.lastIndexOf(".");
              }
              jPath = jPath.substring(0, propIndex);
              currentNode = this.tagsNodeStack.pop();
              textData = "";
              i3 = closeIndex;
            } else if (xmlData[i3 + 1] === "?") {
              let tagData = readTagExp(xmlData, i3, false, "?>");
              if (!tagData) throw new Error("Pi Tag is not closed.");
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
              } else {
                const childNode = new xmlNode(tagData.tagName);
                childNode.add(this.options.textNodeName, "");
                if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
                }
                this.addChild(currentNode, childNode, jPath);
              }
              i3 = tagData.closeIndex + 1;
            } else if (xmlData.substr(i3 + 1, 3) === "!--") {
              const endIndex = findClosingIndex(xmlData, "-->", i3 + 4, "Comment is not closed.");
              if (this.options.commentPropName) {
                const comment = xmlData.substring(i3 + 4, endIndex - 2);
                textData = this.saveTextToParentTag(textData, currentNode, jPath);
                currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
              }
              i3 = endIndex;
            } else if (xmlData.substr(i3 + 1, 2) === "!D") {
              const result = readDocType(xmlData, i3);
              this.docTypeEntities = result.entities;
              i3 = result.i;
            } else if (xmlData.substr(i3 + 1, 2) === "![") {
              const closeIndex = findClosingIndex(xmlData, "]]>", i3, "CDATA is not closed.") - 2;
              const tagExp = xmlData.substring(i3 + 9, closeIndex);
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              if (this.options.cdataPropName) {
                currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
              } else {
                let val2 = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true);
                if (val2 == void 0) val2 = "";
                currentNode.add(this.options.textNodeName, val2);
              }
              i3 = closeIndex + 2;
            } else {
              let result = readTagExp(xmlData, i3, this.options.removeNSPrefix);
              let tagName = result.tagName;
              let tagExp = result.tagExp;
              let attrExpPresent = result.attrExpPresent;
              let closeIndex = result.closeIndex;
              if (this.options.transformTagName) {
                tagName = this.options.transformTagName(tagName);
              }
              if (currentNode && textData) {
                if (currentNode.tagname !== "!xml") {
                  textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
                }
              }
              const lastTag = currentNode;
              if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
                currentNode = this.tagsNodeStack.pop();
                jPath = jPath.substring(0, jPath.lastIndexOf("."));
              }
              if (tagName !== xmlObj.tagname) {
                jPath += jPath ? "." + tagName : tagName;
              }
              if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
                let tagContent = "";
                if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                  i3 = result.closeIndex;
                } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                  i3 = result.closeIndex;
                } else {
                  const result2 = this.readStopNodeData(xmlData, tagName, closeIndex + 1);
                  if (!result2) throw new Error(`Unexpected end of ${tagName}`);
                  i3 = result2.i;
                  tagContent = result2.tagContent;
                }
                const childNode = new xmlNode(tagName);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                if (tagContent) {
                  tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
                }
                jPath = jPath.substr(0, jPath.lastIndexOf("."));
                childNode.add(this.options.textNodeName, tagContent);
                this.addChild(currentNode, childNode, jPath);
              } else {
                if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                  if (tagName[tagName.length - 1] === "/") {
                    tagName = tagName.substr(0, tagName.length - 1);
                    tagExp = tagName;
                  } else {
                    tagExp = tagExp.substr(0, tagExp.length - 1);
                  }
                  if (this.options.transformTagName) {
                    tagName = this.options.transformTagName(tagName);
                  }
                  const childNode = new xmlNode(tagName);
                  if (tagName !== tagExp && attrExpPresent) {
                    childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                  }
                  this.addChild(currentNode, childNode, jPath);
                  jPath = jPath.substr(0, jPath.lastIndexOf("."));
                } else {
                  const childNode = new xmlNode(tagName);
                  this.tagsNodeStack.push(currentNode);
                  if (tagName !== tagExp && attrExpPresent) {
                    childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                  }
                  this.addChild(currentNode, childNode, jPath);
                  currentNode = childNode;
                }
                textData = "";
                i3 = closeIndex;
              }
            }
          } else {
            textData += xmlData[i3];
          }
        }
        return xmlObj.child;
      };
      function addChild(currentNode, childNode, jPath) {
        const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
        if (result === false) {
        } else if (typeof result === "string") {
          childNode.tagname = result;
          currentNode.addChild(childNode);
        } else {
          currentNode.addChild(childNode);
        }
      }
      var replaceEntitiesValue = function(val2) {
        if (this.options.processEntities) {
          for (let entityName2 in this.docTypeEntities) {
            const entity = this.docTypeEntities[entityName2];
            val2 = val2.replace(entity.regx, entity.val);
          }
          for (let entityName2 in this.lastEntities) {
            const entity = this.lastEntities[entityName2];
            val2 = val2.replace(entity.regex, entity.val);
          }
          if (this.options.htmlEntities) {
            for (let entityName2 in this.htmlEntities) {
              const entity = this.htmlEntities[entityName2];
              val2 = val2.replace(entity.regex, entity.val);
            }
          }
          val2 = val2.replace(this.ampEntity.regex, this.ampEntity.val);
        }
        return val2;
      };
      function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
        if (textData) {
          if (isLeafNode === void 0) isLeafNode = Object.keys(currentNode.child).length === 0;
          textData = this.parseTextData(
            textData,
            currentNode.tagname,
            jPath,
            false,
            currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
            isLeafNode
          );
          if (textData !== void 0 && textData !== "")
            currentNode.add(this.options.textNodeName, textData);
          textData = "";
        }
        return textData;
      }
      function isItStopNode(stopNodes, jPath, currentTagName) {
        const allNodesExp = "*." + currentTagName;
        for (const stopNodePath in stopNodes) {
          const stopNodeExp = stopNodes[stopNodePath];
          if (allNodesExp === stopNodeExp || jPath === stopNodeExp) return true;
        }
        return false;
      }
      function tagExpWithClosingIndex(xmlData, i3, closingChar = ">") {
        let attrBoundary;
        let tagExp = "";
        for (let index = i3; index < xmlData.length; index++) {
          let ch = xmlData[index];
          if (attrBoundary) {
            if (ch === attrBoundary) attrBoundary = "";
          } else if (ch === '"' || ch === "'") {
            attrBoundary = ch;
          } else if (ch === closingChar[0]) {
            if (closingChar[1]) {
              if (xmlData[index + 1] === closingChar[1]) {
                return {
                  data: tagExp,
                  index
                };
              }
            } else {
              return {
                data: tagExp,
                index
              };
            }
          } else if (ch === "	") {
            ch = " ";
          }
          tagExp += ch;
        }
      }
      function findClosingIndex(xmlData, str, i3, errMsg) {
        const closingIndex = xmlData.indexOf(str, i3);
        if (closingIndex === -1) {
          throw new Error(errMsg);
        } else {
          return closingIndex + str.length - 1;
        }
      }
      function readTagExp(xmlData, i3, removeNSPrefix, closingChar = ">") {
        const result = tagExpWithClosingIndex(xmlData, i3 + 1, closingChar);
        if (!result) return;
        let tagExp = result.data;
        const closeIndex = result.index;
        const separatorIndex = tagExp.search(/\s/);
        let tagName = tagExp;
        let attrExpPresent = true;
        if (separatorIndex !== -1) {
          tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, "");
          tagExp = tagExp.substr(separatorIndex + 1);
        }
        if (removeNSPrefix) {
          const colonIndex = tagName.indexOf(":");
          if (colonIndex !== -1) {
            tagName = tagName.substr(colonIndex + 1);
            attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
          }
        }
        return {
          tagName,
          tagExp,
          closeIndex,
          attrExpPresent
        };
      }
      function readStopNodeData(xmlData, tagName, i3) {
        const startIndex = i3;
        let openTagCount = 1;
        for (; i3 < xmlData.length; i3++) {
          if (xmlData[i3] === "<") {
            if (xmlData[i3 + 1] === "/") {
              const closeIndex = findClosingIndex(xmlData, ">", i3, `${tagName} is not closed`);
              let closeTagName = xmlData.substring(i3 + 2, closeIndex).trim();
              if (closeTagName === tagName) {
                openTagCount--;
                if (openTagCount === 0) {
                  return {
                    tagContent: xmlData.substring(startIndex, i3),
                    i: closeIndex
                  };
                }
              }
              i3 = closeIndex;
            } else if (xmlData[i3 + 1] === "?") {
              const closeIndex = findClosingIndex(xmlData, "?>", i3 + 1, "StopNode is not closed.");
              i3 = closeIndex;
            } else if (xmlData.substr(i3 + 1, 3) === "!--") {
              const closeIndex = findClosingIndex(xmlData, "-->", i3 + 3, "StopNode is not closed.");
              i3 = closeIndex;
            } else if (xmlData.substr(i3 + 1, 2) === "![") {
              const closeIndex = findClosingIndex(xmlData, "]]>", i3, "StopNode is not closed.") - 2;
              i3 = closeIndex;
            } else {
              const tagData = readTagExp(xmlData, i3, ">");
              if (tagData) {
                const openTagName = tagData && tagData.tagName;
                if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                  openTagCount++;
                }
                i3 = tagData.closeIndex;
              }
            }
          }
        }
      }
      function parseValue(val2, shouldParse, options) {
        if (shouldParse && typeof val2 === "string") {
          const newval = val2.trim();
          if (newval === "true") return true;
          else if (newval === "false") return false;
          else return toNumber(val2, options);
        } else {
          if (util.isExist(val2)) {
            return val2;
          } else {
            return "";
          }
        }
      }
      module.exports = OrderedObjParser;
    }
  });

  // node_modules/fast-xml-parser/src/xmlparser/node2json.js
  var require_node2json = __commonJS({
    "node_modules/fast-xml-parser/src/xmlparser/node2json.js"(exports) {
      "use strict";
      function prettify(node, options) {
        return compress(node, options);
      }
      function compress(arr, options, jPath) {
        let text;
        const compressedObj = {};
        for (let i3 = 0; i3 < arr.length; i3++) {
          const tagObj = arr[i3];
          const property = propName(tagObj);
          let newJpath = "";
          if (jPath === void 0) newJpath = property;
          else newJpath = jPath + "." + property;
          if (property === options.textNodeName) {
            if (text === void 0) text = tagObj[property];
            else text += "" + tagObj[property];
          } else if (property === void 0) {
            continue;
          } else if (tagObj[property]) {
            let val2 = compress(tagObj[property], options, newJpath);
            const isLeaf = isLeafTag(val2, options);
            if (tagObj[":@"]) {
              assignAttributes(val2, tagObj[":@"], newJpath, options);
            } else if (Object.keys(val2).length === 1 && val2[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
              val2 = val2[options.textNodeName];
            } else if (Object.keys(val2).length === 0) {
              if (options.alwaysCreateTextNode) val2[options.textNodeName] = "";
              else val2 = "";
            }
            if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
              if (!Array.isArray(compressedObj[property])) {
                compressedObj[property] = [compressedObj[property]];
              }
              compressedObj[property].push(val2);
            } else {
              if (options.isArray(property, newJpath, isLeaf)) {
                compressedObj[property] = [val2];
              } else {
                compressedObj[property] = val2;
              }
            }
          }
        }
        if (typeof text === "string") {
          if (text.length > 0) compressedObj[options.textNodeName] = text;
        } else if (text !== void 0) compressedObj[options.textNodeName] = text;
        return compressedObj;
      }
      function propName(obj) {
        const keys = Object.keys(obj);
        for (let i3 = 0; i3 < keys.length; i3++) {
          const key = keys[i3];
          if (key !== ":@") return key;
        }
      }
      function assignAttributes(obj, attrMap, jpath, options) {
        if (attrMap) {
          const keys = Object.keys(attrMap);
          const len = keys.length;
          for (let i3 = 0; i3 < len; i3++) {
            const atrrName = keys[i3];
            if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
              obj[atrrName] = [attrMap[atrrName]];
            } else {
              obj[atrrName] = attrMap[atrrName];
            }
          }
        }
      }
      function isLeafTag(obj, options) {
        const { textNodeName } = options;
        const propCount = Object.keys(obj).length;
        if (propCount === 0) {
          return true;
        }
        if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
          return true;
        }
        return false;
      }
      exports.prettify = prettify;
    }
  });

  // node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
  var require_XMLParser = __commonJS({
    "node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"(exports, module) {
      var { buildOptions } = require_OptionsBuilder();
      var OrderedObjParser = require_OrderedObjParser();
      var { prettify } = require_node2json();
      var validator = require_validator();
      var XMLParser2 = class {
        constructor(options) {
          this.externalEntities = {};
          this.options = buildOptions(options);
        }
        /**
         * Parse XML dats to JS object 
         * @param {string|Buffer} xmlData 
         * @param {boolean|Object} validationOption 
         */
        parse(xmlData, validationOption) {
          if (typeof xmlData === "string") {
          } else if (xmlData.toString) {
            xmlData = xmlData.toString();
          } else {
            throw new Error("XML data is accepted in String or Bytes[] form.");
          }
          if (validationOption) {
            if (validationOption === true) validationOption = {};
            const result = validator.validate(xmlData, validationOption);
            if (result !== true) {
              throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
            }
          }
          const orderedObjParser = new OrderedObjParser(this.options);
          orderedObjParser.addExternalEntities(this.externalEntities);
          const orderedResult = orderedObjParser.parseXml(xmlData);
          if (this.options.preserveOrder || orderedResult === void 0) return orderedResult;
          else return prettify(orderedResult, this.options);
        }
        /**
         * Add Entity which is not by default supported by this library
         * @param {string} key 
         * @param {string} value 
         */
        addEntity(key, value) {
          if (value.indexOf("&") !== -1) {
            throw new Error("Entity value can't have '&'");
          } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
            throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
          } else if (value === "&") {
            throw new Error("An entity with value '&' is not permitted");
          } else {
            this.externalEntities[key] = value;
          }
        }
      };
      module.exports = XMLParser2;
    }
  });

  // node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js
  var require_orderedJs2Xml = __commonJS({
    "node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js"(exports, module) {
      var EOL = "\n";
      function toXml(jArray, options) {
        let indentation = "";
        if (options.format && options.indentBy.length > 0) {
          indentation = EOL;
        }
        return arrToStr(jArray, options, "", indentation);
      }
      function arrToStr(arr, options, jPath, indentation) {
        let xmlStr = "";
        let isPreviousElementTag = false;
        for (let i3 = 0; i3 < arr.length; i3++) {
          const tagObj = arr[i3];
          const tagName = propName(tagObj);
          let newJPath = "";
          if (jPath.length === 0) newJPath = tagName;
          else newJPath = `${jPath}.${tagName}`;
          if (tagName === options.textNodeName) {
            let tagText = tagObj[tagName];
            if (!isStopNode(newJPath, options)) {
              tagText = options.tagValueProcessor(tagName, tagText);
              tagText = replaceEntitiesValue(tagText, options);
            }
            if (isPreviousElementTag) {
              xmlStr += indentation;
            }
            xmlStr += tagText;
            isPreviousElementTag = false;
            continue;
          } else if (tagName === options.cdataPropName) {
            if (isPreviousElementTag) {
              xmlStr += indentation;
            }
            xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
            isPreviousElementTag = false;
            continue;
          } else if (tagName === options.commentPropName) {
            xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
            isPreviousElementTag = true;
            continue;
          } else if (tagName[0] === "?") {
            const attStr2 = attr_to_str(tagObj[":@"], options);
            const tempInd = tagName === "?xml" ? "" : indentation;
            let piTextNodeName = tagObj[tagName][0][options.textNodeName];
            piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
            xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
            isPreviousElementTag = true;
            continue;
          }
          let newIdentation = indentation;
          if (newIdentation !== "") {
            newIdentation += options.indentBy;
          }
          const attStr = attr_to_str(tagObj[":@"], options);
          const tagStart = indentation + `<${tagName}${attStr}`;
          const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
          if (options.unpairedTags.indexOf(tagName) !== -1) {
            if (options.suppressUnpairedNode) xmlStr += tagStart + ">";
            else xmlStr += tagStart + "/>";
          } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
            xmlStr += tagStart + "/>";
          } else if (tagValue && tagValue.endsWith(">")) {
            xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
          } else {
            xmlStr += tagStart + ">";
            if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
              xmlStr += indentation + options.indentBy + tagValue + indentation;
            } else {
              xmlStr += tagValue;
            }
            xmlStr += `</${tagName}>`;
          }
          isPreviousElementTag = true;
        }
        return xmlStr;
      }
      function propName(obj) {
        const keys = Object.keys(obj);
        for (let i3 = 0; i3 < keys.length; i3++) {
          const key = keys[i3];
          if (key !== ":@") return key;
        }
      }
      function attr_to_str(attrMap, options) {
        let attrStr = "";
        if (attrMap && !options.ignoreAttributes) {
          for (let attr in attrMap) {
            let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
            attrVal = replaceEntitiesValue(attrVal, options);
            if (attrVal === true && options.suppressBooleanAttributes) {
              attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
            } else {
              attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
            }
          }
        }
        return attrStr;
      }
      function isStopNode(jPath, options) {
        jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
        let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
        for (let index in options.stopNodes) {
          if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName) return true;
        }
        return false;
      }
      function replaceEntitiesValue(textValue, options) {
        if (textValue && textValue.length > 0 && options.processEntities) {
          for (let i3 = 0; i3 < options.entities.length; i3++) {
            const entity = options.entities[i3];
            textValue = textValue.replace(entity.regex, entity.val);
          }
        }
        return textValue;
      }
      module.exports = toXml;
    }
  });

  // node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js
  var require_json2xml = __commonJS({
    "node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js"(exports, module) {
      "use strict";
      var buildFromOrderedJs = require_orderedJs2Xml();
      var defaultOptions2 = {
        attributeNamePrefix: "@_",
        attributesGroupName: false,
        textNodeName: "#text",
        ignoreAttributes: true,
        cdataPropName: false,
        format: false,
        indentBy: "  ",
        suppressEmptyNode: false,
        suppressUnpairedNode: true,
        suppressBooleanAttributes: true,
        tagValueProcessor: function(key, a3) {
          return a3;
        },
        attributeValueProcessor: function(attrName, a3) {
          return a3;
        },
        preserveOrder: false,
        commentPropName: false,
        unpairedTags: [],
        entities: [
          { regex: new RegExp("&", "g"), val: "&amp;" },
          //it must be on top
          { regex: new RegExp(">", "g"), val: "&gt;" },
          { regex: new RegExp("<", "g"), val: "&lt;" },
          { regex: new RegExp("'", "g"), val: "&apos;" },
          { regex: new RegExp('"', "g"), val: "&quot;" }
        ],
        processEntities: true,
        stopNodes: [],
        // transformTagName: false,
        // transformAttributeName: false,
        oneListGroup: false
      };
      function Builder(options) {
        this.options = Object.assign({}, defaultOptions2, options);
        if (this.options.ignoreAttributes || this.options.attributesGroupName) {
          this.isAttribute = function() {
            return false;
          };
        } else {
          this.attrPrefixLen = this.options.attributeNamePrefix.length;
          this.isAttribute = isAttribute;
        }
        this.processTextOrObjNode = processTextOrObjNode;
        if (this.options.format) {
          this.indentate = indentate;
          this.tagEndChar = ">\n";
          this.newLine = "\n";
        } else {
          this.indentate = function() {
            return "";
          };
          this.tagEndChar = ">";
          this.newLine = "";
        }
      }
      Builder.prototype.build = function(jObj) {
        if (this.options.preserveOrder) {
          return buildFromOrderedJs(jObj, this.options);
        } else {
          if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
            jObj = {
              [this.options.arrayNodeName]: jObj
            };
          }
          return this.j2x(jObj, 0).val;
        }
      };
      Builder.prototype.j2x = function(jObj, level) {
        let attrStr = "";
        let val2 = "";
        for (let key in jObj) {
          if (typeof jObj[key] === "undefined") {
          } else if (jObj[key] === null) {
            if (key[0] === "?") val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
            else val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
          } else if (jObj[key] instanceof Date) {
            val2 += this.buildTextValNode(jObj[key], key, "", level);
          } else if (typeof jObj[key] !== "object") {
            const attr = this.isAttribute(key);
            if (attr) {
              attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
            } else {
              if (key === this.options.textNodeName) {
                let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
                val2 += this.replaceEntitiesValue(newval);
              } else {
                val2 += this.buildTextValNode(jObj[key], key, "", level);
              }
            }
          } else if (Array.isArray(jObj[key])) {
            const arrLen = jObj[key].length;
            let listTagVal = "";
            for (let j3 = 0; j3 < arrLen; j3++) {
              const item = jObj[key][j3];
              if (typeof item === "undefined") {
              } else if (item === null) {
                if (key[0] === "?") val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
                else val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
              } else if (typeof item === "object") {
                if (this.options.oneListGroup) {
                  listTagVal += this.j2x(item, level + 1).val;
                } else {
                  listTagVal += this.processTextOrObjNode(item, key, level);
                }
              } else {
                listTagVal += this.buildTextValNode(item, key, "", level);
              }
            }
            if (this.options.oneListGroup) {
              listTagVal = this.buildObjectNode(listTagVal, key, "", level);
            }
            val2 += listTagVal;
          } else {
            if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
              const Ks = Object.keys(jObj[key]);
              const L = Ks.length;
              for (let j3 = 0; j3 < L; j3++) {
                attrStr += this.buildAttrPairStr(Ks[j3], "" + jObj[key][Ks[j3]]);
              }
            } else {
              val2 += this.processTextOrObjNode(jObj[key], key, level);
            }
          }
        }
        return { attrStr, val: val2 };
      };
      Builder.prototype.buildAttrPairStr = function(attrName, val2) {
        val2 = this.options.attributeValueProcessor(attrName, "" + val2);
        val2 = this.replaceEntitiesValue(val2);
        if (this.options.suppressBooleanAttributes && val2 === "true") {
          return " " + attrName;
        } else return " " + attrName + '="' + val2 + '"';
      };
      function processTextOrObjNode(object, key, level) {
        const result = this.j2x(object, level + 1);
        if (object[this.options.textNodeName] !== void 0 && Object.keys(object).length === 1) {
          return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
        } else {
          return this.buildObjectNode(result.val, key, result.attrStr, level);
        }
      }
      Builder.prototype.buildObjectNode = function(val2, key, attrStr, level) {
        if (val2 === "") {
          if (key[0] === "?") return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
          else {
            return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
          }
        } else {
          let tagEndExp = "</" + key + this.tagEndChar;
          let piClosingChar = "";
          if (key[0] === "?") {
            piClosingChar = "?";
            tagEndExp = "";
          }
          if (attrStr && val2.indexOf("<") === -1) {
            return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val2 + tagEndExp;
          } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
            return this.indentate(level) + `<!--${val2}-->` + this.newLine;
          } else {
            return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val2 + this.indentate(level) + tagEndExp;
          }
        }
      };
      Builder.prototype.closeTag = function(key) {
        let closeTag = "";
        if (this.options.unpairedTags.indexOf(key) !== -1) {
          if (!this.options.suppressUnpairedNode) closeTag = "/";
        } else if (this.options.suppressEmptyNode) {
          closeTag = "/";
        } else {
          closeTag = `></${key}`;
        }
        return closeTag;
      };
      Builder.prototype.buildTextValNode = function(val2, key, attrStr, level) {
        if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
          return this.indentate(level) + `<![CDATA[${val2}]]>` + this.newLine;
        } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
          return this.indentate(level) + `<!--${val2}-->` + this.newLine;
        } else if (key[0] === "?") {
          return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        } else {
          let textValue = this.options.tagValueProcessor(key, val2);
          textValue = this.replaceEntitiesValue(textValue);
          if (textValue === "") {
            return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
          } else {
            return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
          }
        }
      };
      Builder.prototype.replaceEntitiesValue = function(textValue) {
        if (textValue && textValue.length > 0 && this.options.processEntities) {
          for (let i3 = 0; i3 < this.options.entities.length; i3++) {
            const entity = this.options.entities[i3];
            textValue = textValue.replace(entity.regex, entity.val);
          }
        }
        return textValue;
      };
      function indentate(level) {
        return this.options.indentBy.repeat(level);
      }
      function isAttribute(name) {
        if (name.startsWith(this.options.attributeNamePrefix)) {
          return name.substr(this.attrPrefixLen);
        } else {
          return false;
        }
      }
      module.exports = Builder;
    }
  });

  // node_modules/fast-xml-parser/src/fxp.js
  var require_fxp = __commonJS({
    "node_modules/fast-xml-parser/src/fxp.js"(exports, module) {
      "use strict";
      var validator = require_validator();
      var XMLParser2 = require_XMLParser();
      var XMLBuilder = require_json2xml();
      module.exports = {
        XMLParser: XMLParser2,
        XMLValidator: validator,
        XMLBuilder
      };
    }
  });

  // node_modules/@aws-sdk/core/dist-es/protocols/xml/parseXmlBody.js
  var import_fast_xml_parser;
  var init_parseXmlBody = __esm({
    "node_modules/@aws-sdk/core/dist-es/protocols/xml/parseXmlBody.js"() {
      init_dist_es26();
      import_fast_xml_parser = __toESM(require_fxp());
    }
  });

  // node_modules/@aws-sdk/core/dist-es/protocols/index.js
  var init_protocols = __esm({
    "node_modules/@aws-sdk/core/dist-es/protocols/index.js"() {
      init_coercing_serializers();
      init_awsExpectUnion();
      init_parseJsonBody();
      init_parseXmlBody();
    }
  });

  // node_modules/@aws-sdk/core/dist-es/index.js
  var init_dist_es32 = __esm({
    "node_modules/@aws-sdk/core/dist-es/index.js"() {
      init_client3();
      init_httpAuthSchemes2();
      init_protocols();
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/auth/httpAuthSchemeProvider.js
  function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "cognito-identity",
        region: authParameters.region
      },
      propertiesExtractor: (config, context) => ({
        signingProperties: {
          config,
          context
        }
      })
    };
  }
  function createSmithyApiNoAuthHttpAuthOption(authParameters) {
    return {
      schemeId: "smithy.api#noAuth"
    };
  }
  var defaultCognitoIdentityHttpAuthSchemeParametersProvider, defaultCognitoIdentityHttpAuthSchemeProvider, resolveHttpAuthSchemeConfig;
  var init_httpAuthSchemeProvider = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/auth/httpAuthSchemeProvider.js"() {
      init_dist_es32();
      init_dist_es10();
      defaultCognitoIdentityHttpAuthSchemeParametersProvider = async (config, context, input) => {
        return {
          operation: getSmithyContext(context).operation,
          region: await normalizeProvider(config.region)() || (() => {
            throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
          })()
        };
      };
      defaultCognitoIdentityHttpAuthSchemeProvider = (authParameters) => {
        const options = [];
        switch (authParameters.operation) {
          case "GetCredentialsForIdentity": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
          }
          case "GetId": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
          }
          case "GetOpenIdToken": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
          }
          case "UnlinkIdentity": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
          }
          default: {
            options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
          }
        }
        return options;
      };
      resolveHttpAuthSchemeConfig = (config) => {
        const config_0 = resolveAwsSdkSigV4Config(config);
        return {
          ...config_0
        };
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/EndpointParameters.js
  var resolveClientEndpointParameters, commonParams;
  var init_EndpointParameters = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/EndpointParameters.js"() {
      resolveClientEndpointParameters = (options) => {
        return {
          ...options,
          useDualstackEndpoint: options.useDualstackEndpoint ?? false,
          useFipsEndpoint: options.useFipsEndpoint ?? false,
          defaultSigningName: "cognito-identity"
        };
      };
      commonParams = {
        UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
        Endpoint: { type: "builtInParams", name: "endpoint" },
        Region: { type: "builtInParams", name: "region" },
        UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/package.json
  var package_default;
  var init_package = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/package.json"() {
      package_default = {
        name: "@aws-sdk/client-cognito-identity",
        description: "AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native",
        version: "3.529.1",
        scripts: {
          build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
          "build:cjs": "node ../../scripts/compilation/inline client-cognito-identity",
          "build:es": "tsc -p tsconfig.es.json",
          "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
          "build:types": "tsc -p tsconfig.types.json",
          "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
          clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
          "extract:docs": "api-extractor run --local",
          "generate:client": "node ../../scripts/generate-clients/single-service --solo cognito-identity",
          "test:e2e": "ts-mocha test/**/*.ispec.ts && karma start karma.conf.js"
        },
        main: "./dist-cjs/index.js",
        types: "./dist-types/index.d.ts",
        module: "./dist-es/index.js",
        sideEffects: false,
        dependencies: {
          "@aws-crypto/sha256-browser": "3.0.0",
          "@aws-crypto/sha256-js": "3.0.0",
          "@aws-sdk/client-sts": "3.529.1",
          "@aws-sdk/core": "3.529.1",
          "@aws-sdk/credential-provider-node": "3.529.1",
          "@aws-sdk/middleware-host-header": "3.523.0",
          "@aws-sdk/middleware-logger": "3.523.0",
          "@aws-sdk/middleware-recursion-detection": "3.523.0",
          "@aws-sdk/middleware-user-agent": "3.525.0",
          "@aws-sdk/region-config-resolver": "3.525.0",
          "@aws-sdk/types": "3.523.0",
          "@aws-sdk/util-endpoints": "3.525.0",
          "@aws-sdk/util-user-agent-browser": "3.523.0",
          "@aws-sdk/util-user-agent-node": "3.525.0",
          "@smithy/config-resolver": "^2.1.4",
          "@smithy/core": "^1.3.5",
          "@smithy/fetch-http-handler": "^2.4.3",
          "@smithy/hash-node": "^2.1.3",
          "@smithy/invalid-dependency": "^2.1.3",
          "@smithy/middleware-content-length": "^2.1.3",
          "@smithy/middleware-endpoint": "^2.4.4",
          "@smithy/middleware-retry": "^2.1.4",
          "@smithy/middleware-serde": "^2.1.3",
          "@smithy/middleware-stack": "^2.1.3",
          "@smithy/node-config-provider": "^2.2.4",
          "@smithy/node-http-handler": "^2.4.1",
          "@smithy/protocol-http": "^3.2.1",
          "@smithy/smithy-client": "^2.4.2",
          "@smithy/types": "^2.10.1",
          "@smithy/url-parser": "^2.1.3",
          "@smithy/util-base64": "^2.1.1",
          "@smithy/util-body-length-browser": "^2.1.1",
          "@smithy/util-body-length-node": "^2.2.1",
          "@smithy/util-defaults-mode-browser": "^2.1.4",
          "@smithy/util-defaults-mode-node": "^2.2.3",
          "@smithy/util-endpoints": "^1.1.4",
          "@smithy/util-middleware": "^2.1.3",
          "@smithy/util-retry": "^2.1.3",
          "@smithy/util-utf8": "^2.1.1",
          tslib: "^2.5.0"
        },
        devDependencies: {
          "@aws-sdk/client-iam": "3.529.1",
          "@smithy/service-client-documentation-generator": "^2.1.1",
          "@tsconfig/node14": "1.0.3",
          "@types/chai": "^4.2.11",
          "@types/mocha": "^8.0.4",
          "@types/node": "^14.14.31",
          concurrently: "7.0.0",
          "downlevel-dts": "0.10.1",
          rimraf: "3.0.2",
          typescript: "~4.9.5"
        },
        engines: {
          node: ">=14.0.0"
        },
        typesVersions: {
          "<4.0": {
            "dist-types/*": [
              "dist-types/ts3.4/*"
            ]
          }
        },
        files: [
          "dist-*/**"
        ],
        author: {
          name: "AWS SDK for JavaScript Team",
          url: "https://aws.amazon.com/javascript/"
        },
        license: "Apache-2.0",
        browser: {
          "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
        },
        "react-native": {
          "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
        },
        homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity",
        repository: {
          type: "git",
          url: "https://github.com/aws/aws-sdk-js-v3.git",
          directory: "clients/client-cognito-identity"
        }
      };
    }
  });

  // node_modules/@aws-crypto/sha256-browser/node_modules/tslib/tslib.es6.js
  var tslib_es6_exports = {};
  __export(tslib_es6_exports, {
    __assign: () => __assign,
    __asyncDelegator: () => __asyncDelegator,
    __asyncGenerator: () => __asyncGenerator,
    __asyncValues: () => __asyncValues,
    __await: () => __await,
    __awaiter: () => __awaiter,
    __classPrivateFieldGet: () => __classPrivateFieldGet,
    __classPrivateFieldSet: () => __classPrivateFieldSet,
    __createBinding: () => __createBinding,
    __decorate: () => __decorate,
    __exportStar: () => __exportStar,
    __extends: () => __extends,
    __generator: () => __generator,
    __importDefault: () => __importDefault,
    __importStar: () => __importStar,
    __makeTemplateObject: () => __makeTemplateObject,
    __metadata: () => __metadata,
    __param: () => __param,
    __read: () => __read,
    __rest: () => __rest,
    __spread: () => __spread,
    __spreadArrays: () => __spreadArrays,
    __values: () => __values
  });
  function __extends(d3, b3) {
    extendStatics(d3, b3);
    function __() {
      this.constructor = d3;
    }
    d3.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
  }
  function __rest(s3, e3) {
    var t3 = {};
    for (var p3 in s3) if (Object.prototype.hasOwnProperty.call(s3, p3) && e3.indexOf(p3) < 0)
      t3[p3] = s3[p3];
    if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i3 = 0, p3 = Object.getOwnPropertySymbols(s3); i3 < p3.length; i3++) {
        if (e3.indexOf(p3[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p3[i3]))
          t3[p3[i3]] = s3[p3[i3]];
      }
    return t3;
  }
  function __decorate(decorators, target, key, desc) {
    var c3 = arguments.length, r3 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r3 = Reflect.decorate(decorators, target, key, desc);
    else for (var i3 = decorators.length - 1; i3 >= 0; i3--) if (d3 = decorators[i3]) r3 = (c3 < 3 ? d3(r3) : c3 > 3 ? d3(target, key, r3) : d3(target, key)) || r3;
    return c3 > 3 && r3 && Object.defineProperty(target, key, r3), r3;
  }
  function __param(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e3) {
          reject(e3);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e3) {
          reject(e3);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t3[0] & 1) throw t3[1];
      return t3[1];
    }, trys: [], ops: [] }, f3, y2, t3, g3;
    return g3 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g3[Symbol.iterator] = function() {
      return this;
    }), g3;
    function verb(n3) {
      return function(v3) {
        return step([n3, v3]);
      };
    }
    function step(op) {
      if (f3) throw new TypeError("Generator is already executing.");
      while (_) try {
        if (f3 = 1, y2 && (t3 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t3 = y2["return"]) && t3.call(y2), 0) : y2.next) && !(t3 = t3.call(y2, op[1])).done) return t3;
        if (y2 = 0, t3) op = [op[0] & 2, t3.value];
        switch (op[0]) {
          case 0:
          case 1:
            t3 = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t3 = _.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t3[1]) {
              _.label = t3[1];
              t3 = op;
              break;
            }
            if (t3 && _.label < t3[2]) {
              _.label = t3[2];
              _.ops.push(op);
              break;
            }
            if (t3[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e3) {
        op = [6, e3];
        y2 = 0;
      } finally {
        f3 = t3 = 0;
      }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __createBinding(o3, m3, k3, k22) {
    if (k22 === void 0) k22 = k3;
    o3[k22] = m3[k3];
  }
  function __exportStar(m3, exports) {
    for (var p3 in m3) if (p3 !== "default" && !exports.hasOwnProperty(p3)) exports[p3] = m3[p3];
  }
  function __values(o3) {
    var s3 = typeof Symbol === "function" && Symbol.iterator, m3 = s3 && o3[s3], i3 = 0;
    if (m3) return m3.call(o3);
    if (o3 && typeof o3.length === "number") return {
      next: function() {
        if (o3 && i3 >= o3.length) o3 = void 0;
        return { value: o3 && o3[i3++], done: !o3 };
      }
    };
    throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o3, n3) {
    var m3 = typeof Symbol === "function" && o3[Symbol.iterator];
    if (!m3) return o3;
    var i3 = m3.call(o3), r3, ar = [], e3;
    try {
      while ((n3 === void 0 || n3-- > 0) && !(r3 = i3.next()).done) ar.push(r3.value);
    } catch (error) {
      e3 = { error };
    } finally {
      try {
        if (r3 && !r3.done && (m3 = i3["return"])) m3.call(i3);
      } finally {
        if (e3) throw e3.error;
      }
    }
    return ar;
  }
  function __spread() {
    for (var ar = [], i3 = 0; i3 < arguments.length; i3++)
      ar = ar.concat(__read(arguments[i3]));
    return ar;
  }
  function __spreadArrays() {
    for (var s3 = 0, i3 = 0, il = arguments.length; i3 < il; i3++) s3 += arguments[i3].length;
    for (var r3 = Array(s3), k3 = 0, i3 = 0; i3 < il; i3++)
      for (var a3 = arguments[i3], j3 = 0, jl = a3.length; j3 < jl; j3++, k3++)
        r3[k3] = a3[j3];
    return r3;
  }
  function __await(v3) {
    return this instanceof __await ? (this.v = v3, this) : new __await(v3);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g3 = generator.apply(thisArg, _arguments || []), i3, q3 = [];
    return i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
      return this;
    }, i3;
    function verb(n3) {
      if (g3[n3]) i3[n3] = function(v3) {
        return new Promise(function(a3, b3) {
          q3.push([n3, v3, a3, b3]) > 1 || resume(n3, v3);
        });
      };
    }
    function resume(n3, v3) {
      try {
        step(g3[n3](v3));
      } catch (e3) {
        settle(q3[0][3], e3);
      }
    }
    function step(r3) {
      r3.value instanceof __await ? Promise.resolve(r3.value.v).then(fulfill, reject) : settle(q3[0][2], r3);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f3, v3) {
      if (f3(v3), q3.shift(), q3.length) resume(q3[0][0], q3[0][1]);
    }
  }
  function __asyncDelegator(o3) {
    var i3, p3;
    return i3 = {}, verb("next"), verb("throw", function(e3) {
      throw e3;
    }), verb("return"), i3[Symbol.iterator] = function() {
      return this;
    }, i3;
    function verb(n3, f3) {
      i3[n3] = o3[n3] ? function(v3) {
        return (p3 = !p3) ? { value: __await(o3[n3](v3)), done: n3 === "return" } : f3 ? f3(v3) : v3;
      } : f3;
    }
  }
  function __asyncValues(o3) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m3 = o3[Symbol.asyncIterator], i3;
    return m3 ? m3.call(o3) : (o3 = typeof __values === "function" ? __values(o3) : o3[Symbol.iterator](), i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
      return this;
    }, i3);
    function verb(n3) {
      i3[n3] = o3[n3] && function(v3) {
        return new Promise(function(resolve, reject) {
          v3 = o3[n3](v3), settle(resolve, reject, v3.done, v3.value);
        });
      };
    }
    function settle(resolve, reject, d3, v3) {
      Promise.resolve(v3).then(function(v5) {
        resolve({ value: v5, done: d3 });
      }, reject);
    }
  }
  function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }
  function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
      for (var k3 in mod) if (Object.hasOwnProperty.call(mod, k3)) result[k3] = mod[k3];
    }
    result.default = mod;
    return result;
  }
  function __importDefault(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  }
  function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
  }
  function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
  }
  var extendStatics, __assign;
  var init_tslib_es6 = __esm({
    "node_modules/@aws-crypto/sha256-browser/node_modules/tslib/tslib.es6.js"() {
      extendStatics = function(d3, b3) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d4, b4) {
          d4.__proto__ = b4;
        } || function(d4, b4) {
          for (var p3 in b4) if (b4.hasOwnProperty(p3)) d4[p3] = b4[p3];
        };
        return extendStatics(d3, b3);
      };
      __assign = function() {
        __assign = Object.assign || function __assign5(t3) {
          for (var s3, i3 = 1, n3 = arguments.length; i3 < n3; i3++) {
            s3 = arguments[i3];
            for (var p3 in s3) if (Object.prototype.hasOwnProperty.call(s3, p3)) t3[p3] = s3[p3];
          }
          return t3;
        };
        return __assign.apply(this, arguments);
      };
    }
  });

  // node_modules/@aws-crypto/sha256-browser/build/isEmptyData.js
  var require_isEmptyData = __commonJS({
    "node_modules/@aws-crypto/sha256-browser/build/isEmptyData.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isEmptyData = void 0;
      function isEmptyData(data) {
        if (typeof data === "string") {
          return data.length === 0;
        }
        return data.byteLength === 0;
      }
      exports.isEmptyData = isEmptyData;
    }
  });

  // node_modules/@aws-crypto/sha256-browser/build/constants.js
  var require_constants = __commonJS({
    "node_modules/@aws-crypto/sha256-browser/build/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.EMPTY_DATA_SHA_256 = exports.SHA_256_HMAC_ALGO = exports.SHA_256_HASH = void 0;
      exports.SHA_256_HASH = { name: "SHA-256" };
      exports.SHA_256_HMAC_ALGO = {
        name: "HMAC",
        hash: exports.SHA_256_HASH
      };
      exports.EMPTY_DATA_SHA_256 = new Uint8Array([
        227,
        176,
        196,
        66,
        152,
        252,
        28,
        20,
        154,
        251,
        244,
        200,
        153,
        111,
        185,
        36,
        39,
        174,
        65,
        228,
        100,
        155,
        147,
        76,
        164,
        149,
        153,
        27,
        120,
        82,
        184,
        85
      ]);
    }
  });

  // node_modules/@aws-sdk/util-utf8-browser/dist-cjs/pureJs.js
  var require_pureJs = __commonJS({
    "node_modules/@aws-sdk/util-utf8-browser/dist-cjs/pureJs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.toUtf8 = exports.fromUtf8 = void 0;
      var fromUtf82 = (input) => {
        const bytes = [];
        for (let i3 = 0, len = input.length; i3 < len; i3++) {
          const value = input.charCodeAt(i3);
          if (value < 128) {
            bytes.push(value);
          } else if (value < 2048) {
            bytes.push(value >> 6 | 192, value & 63 | 128);
          } else if (i3 + 1 < input.length && (value & 64512) === 55296 && (input.charCodeAt(i3 + 1) & 64512) === 56320) {
            const surrogatePair = 65536 + ((value & 1023) << 10) + (input.charCodeAt(++i3) & 1023);
            bytes.push(surrogatePair >> 18 | 240, surrogatePair >> 12 & 63 | 128, surrogatePair >> 6 & 63 | 128, surrogatePair & 63 | 128);
          } else {
            bytes.push(value >> 12 | 224, value >> 6 & 63 | 128, value & 63 | 128);
          }
        }
        return Uint8Array.from(bytes);
      };
      exports.fromUtf8 = fromUtf82;
      var toUtf82 = (input) => {
        let decoded = "";
        for (let i3 = 0, len = input.length; i3 < len; i3++) {
          const byte = input[i3];
          if (byte < 128) {
            decoded += String.fromCharCode(byte);
          } else if (192 <= byte && byte < 224) {
            const nextByte = input[++i3];
            decoded += String.fromCharCode((byte & 31) << 6 | nextByte & 63);
          } else if (240 <= byte && byte < 365) {
            const surrogatePair = [byte, input[++i3], input[++i3], input[++i3]];
            const encoded = "%" + surrogatePair.map((byteValue) => byteValue.toString(16)).join("%");
            decoded += decodeURIComponent(encoded);
          } else {
            decoded += String.fromCharCode((byte & 15) << 12 | (input[++i3] & 63) << 6 | input[++i3] & 63);
          }
        }
        return decoded;
      };
      exports.toUtf8 = toUtf82;
    }
  });

  // node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js
  var require_whatwgEncodingApi = __commonJS({
    "node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.toUtf8 = exports.fromUtf8 = void 0;
      function fromUtf82(input) {
        return new TextEncoder().encode(input);
      }
      exports.fromUtf8 = fromUtf82;
      function toUtf82(input) {
        return new TextDecoder("utf-8").decode(input);
      }
      exports.toUtf8 = toUtf82;
    }
  });

  // node_modules/@aws-sdk/util-utf8-browser/dist-cjs/index.js
  var require_dist_cjs = __commonJS({
    "node_modules/@aws-sdk/util-utf8-browser/dist-cjs/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.toUtf8 = exports.fromUtf8 = void 0;
      var pureJs_1 = require_pureJs();
      var whatwgEncodingApi_1 = require_whatwgEncodingApi();
      var fromUtf82 = (input) => typeof TextEncoder === "function" ? (0, whatwgEncodingApi_1.fromUtf8)(input) : (0, pureJs_1.fromUtf8)(input);
      exports.fromUtf8 = fromUtf82;
      var toUtf82 = (input) => typeof TextDecoder === "function" ? (0, whatwgEncodingApi_1.toUtf8)(input) : (0, pureJs_1.toUtf8)(input);
      exports.toUtf8 = toUtf82;
    }
  });

  // node_modules/@aws-sdk/util-locate-window/dist-cjs/index.js
  var require_dist_cjs2 = __commonJS({
    "node_modules/@aws-sdk/util-locate-window/dist-cjs/index.js"(exports, module) {
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
      var __export2 = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps2 = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
      var src_exports = {};
      __export2(src_exports, {
        locateWindow: () => locateWindow
      });
      module.exports = __toCommonJS2(src_exports);
      var fallbackWindow = {};
      function locateWindow() {
        if (typeof window !== "undefined") {
          return window;
        } else if (typeof self !== "undefined") {
          return self;
        }
        return fallbackWindow;
      }
      __name(locateWindow, "locateWindow");
    }
  });

  // node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js
  var require_ie11Sha256 = __commonJS({
    "node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Sha256 = void 0;
      var isEmptyData_1 = require_isEmptyData();
      var constants_1 = require_constants();
      var util_utf8_browser_1 = require_dist_cjs();
      var util_locate_window_1 = require_dist_cjs2();
      var Sha2563 = (
        /** @class */
        function() {
          function Sha2564(secret) {
            this.secret = secret;
            this.reset();
          }
          Sha2564.prototype.update = function(toHash) {
            var _this = this;
            if ((0, isEmptyData_1.isEmptyData)(toHash)) {
              return;
            }
            this.operation = this.operation.then(function(operation) {
              operation.onerror = function() {
                _this.operation = Promise.reject(new Error("Error encountered updating hash"));
              };
              operation.process(toArrayBufferView(toHash));
              return operation;
            });
            this.operation.catch(function() {
            });
          };
          Sha2564.prototype.digest = function() {
            return this.operation.then(function(operation) {
              return new Promise(function(resolve, reject) {
                operation.onerror = function() {
                  reject(new Error("Error encountered finalizing hash"));
                };
                operation.oncomplete = function() {
                  if (operation.result) {
                    resolve(new Uint8Array(operation.result));
                  }
                  reject(new Error("Error encountered finalizing hash"));
                };
                operation.finish();
              });
            });
          };
          Sha2564.prototype.reset = function() {
            if (this.secret) {
              this.operation = getKeyPromise(this.secret).then(function(keyData) {
                return (0, util_locate_window_1.locateWindow)().msCrypto.subtle.sign(constants_1.SHA_256_HMAC_ALGO, keyData);
              });
              this.operation.catch(function() {
              });
            } else {
              this.operation = Promise.resolve((0, util_locate_window_1.locateWindow)().msCrypto.subtle.digest("SHA-256"));
            }
          };
          return Sha2564;
        }()
      );
      exports.Sha256 = Sha2563;
      function getKeyPromise(secret) {
        return new Promise(function(resolve, reject) {
          var keyOperation = (0, util_locate_window_1.locateWindow)().msCrypto.subtle.importKey("raw", toArrayBufferView(secret), constants_1.SHA_256_HMAC_ALGO, false, ["sign"]);
          keyOperation.oncomplete = function() {
            if (keyOperation.result) {
              resolve(keyOperation.result);
            }
            reject(new Error("ImportKey completed without importing key."));
          };
          keyOperation.onerror = function() {
            reject(new Error("ImportKey failed to import key."));
          };
        });
      }
      function toArrayBufferView(data) {
        if (typeof data === "string") {
          return (0, util_utf8_browser_1.fromUtf8)(data);
        }
        if (ArrayBuffer.isView(data)) {
          return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
        }
        return new Uint8Array(data);
      }
    }
  });

  // node_modules/@aws-crypto/util/build/convertToBuffer.js
  var require_convertToBuffer = __commonJS({
    "node_modules/@aws-crypto/util/build/convertToBuffer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.convertToBuffer = void 0;
      var util_utf8_browser_1 = require_dist_cjs();
      var fromUtf82 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
        return Buffer.from(input, "utf8");
      } : util_utf8_browser_1.fromUtf8;
      function convertToBuffer(data) {
        if (data instanceof Uint8Array)
          return data;
        if (typeof data === "string") {
          return fromUtf82(data);
        }
        if (ArrayBuffer.isView(data)) {
          return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
        }
        return new Uint8Array(data);
      }
      exports.convertToBuffer = convertToBuffer;
    }
  });

  // node_modules/@aws-crypto/util/build/isEmptyData.js
  var require_isEmptyData2 = __commonJS({
    "node_modules/@aws-crypto/util/build/isEmptyData.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isEmptyData = void 0;
      function isEmptyData(data) {
        if (typeof data === "string") {
          return data.length === 0;
        }
        return data.byteLength === 0;
      }
      exports.isEmptyData = isEmptyData;
    }
  });

  // node_modules/@aws-crypto/util/build/numToUint8.js
  var require_numToUint8 = __commonJS({
    "node_modules/@aws-crypto/util/build/numToUint8.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.numToUint8 = void 0;
      function numToUint8(num) {
        return new Uint8Array([
          (num & 4278190080) >> 24,
          (num & 16711680) >> 16,
          (num & 65280) >> 8,
          num & 255
        ]);
      }
      exports.numToUint8 = numToUint8;
    }
  });

  // node_modules/@aws-crypto/util/build/uint32ArrayFrom.js
  var require_uint32ArrayFrom = __commonJS({
    "node_modules/@aws-crypto/util/build/uint32ArrayFrom.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.uint32ArrayFrom = void 0;
      function uint32ArrayFrom(a_lookUpTable) {
        if (!Uint32Array.from) {
          var return_array = new Uint32Array(a_lookUpTable.length);
          var a_index = 0;
          while (a_index < a_lookUpTable.length) {
            return_array[a_index] = a_lookUpTable[a_index];
            a_index += 1;
          }
          return return_array;
        }
        return Uint32Array.from(a_lookUpTable);
      }
      exports.uint32ArrayFrom = uint32ArrayFrom;
    }
  });

  // node_modules/@aws-crypto/util/build/index.js
  var require_build = __commonJS({
    "node_modules/@aws-crypto/util/build/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = void 0;
      var convertToBuffer_1 = require_convertToBuffer();
      Object.defineProperty(exports, "convertToBuffer", { enumerable: true, get: function() {
        return convertToBuffer_1.convertToBuffer;
      } });
      var isEmptyData_1 = require_isEmptyData2();
      Object.defineProperty(exports, "isEmptyData", { enumerable: true, get: function() {
        return isEmptyData_1.isEmptyData;
      } });
      var numToUint8_1 = require_numToUint8();
      Object.defineProperty(exports, "numToUint8", { enumerable: true, get: function() {
        return numToUint8_1.numToUint8;
      } });
      var uint32ArrayFrom_1 = require_uint32ArrayFrom();
      Object.defineProperty(exports, "uint32ArrayFrom", { enumerable: true, get: function() {
        return uint32ArrayFrom_1.uint32ArrayFrom;
      } });
    }
  });

  // node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js
  var require_webCryptoSha256 = __commonJS({
    "node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Sha256 = void 0;
      var util_1 = require_build();
      var constants_1 = require_constants();
      var util_locate_window_1 = require_dist_cjs2();
      var Sha2563 = (
        /** @class */
        function() {
          function Sha2564(secret) {
            this.toHash = new Uint8Array(0);
            this.secret = secret;
            this.reset();
          }
          Sha2564.prototype.update = function(data) {
            if ((0, util_1.isEmptyData)(data)) {
              return;
            }
            var update = (0, util_1.convertToBuffer)(data);
            var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
            typedArray.set(this.toHash, 0);
            typedArray.set(update, this.toHash.byteLength);
            this.toHash = typedArray;
          };
          Sha2564.prototype.digest = function() {
            var _this = this;
            if (this.key) {
              return this.key.then(function(key) {
                return (0, util_locate_window_1.locateWindow)().crypto.subtle.sign(constants_1.SHA_256_HMAC_ALGO, key, _this.toHash).then(function(data) {
                  return new Uint8Array(data);
                });
              });
            }
            if ((0, util_1.isEmptyData)(this.toHash)) {
              return Promise.resolve(constants_1.EMPTY_DATA_SHA_256);
            }
            return Promise.resolve().then(function() {
              return (0, util_locate_window_1.locateWindow)().crypto.subtle.digest(constants_1.SHA_256_HASH, _this.toHash);
            }).then(function(data) {
              return Promise.resolve(new Uint8Array(data));
            });
          };
          Sha2564.prototype.reset = function() {
            var _this = this;
            this.toHash = new Uint8Array(0);
            if (this.secret && this.secret !== void 0) {
              this.key = new Promise(function(resolve, reject) {
                (0, util_locate_window_1.locateWindow)().crypto.subtle.importKey("raw", (0, util_1.convertToBuffer)(_this.secret), constants_1.SHA_256_HMAC_ALGO, false, ["sign"]).then(resolve, reject);
              });
              this.key.catch(function() {
              });
            }
          };
          return Sha2564;
        }()
      );
      exports.Sha256 = Sha2563;
    }
  });

  // node_modules/@aws-crypto/sha256-js/node_modules/tslib/tslib.es6.js
  var tslib_es6_exports2 = {};
  __export(tslib_es6_exports2, {
    __assign: () => __assign2,
    __asyncDelegator: () => __asyncDelegator2,
    __asyncGenerator: () => __asyncGenerator2,
    __asyncValues: () => __asyncValues2,
    __await: () => __await2,
    __awaiter: () => __awaiter2,
    __classPrivateFieldGet: () => __classPrivateFieldGet2,
    __classPrivateFieldSet: () => __classPrivateFieldSet2,
    __createBinding: () => __createBinding2,
    __decorate: () => __decorate2,
    __exportStar: () => __exportStar2,
    __extends: () => __extends2,
    __generator: () => __generator2,
    __importDefault: () => __importDefault2,
    __importStar: () => __importStar2,
    __makeTemplateObject: () => __makeTemplateObject2,
    __metadata: () => __metadata2,
    __param: () => __param2,
    __read: () => __read2,
    __rest: () => __rest2,
    __spread: () => __spread2,
    __spreadArrays: () => __spreadArrays2,
    __values: () => __values2
  });
  function __extends2(d3, b3) {
    extendStatics2(d3, b3);
    function __() {
      this.constructor = d3;
    }
    d3.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
  }
  function __rest2(s3, e3) {
    var t3 = {};
    for (var p3 in s3) if (Object.prototype.hasOwnProperty.call(s3, p3) && e3.indexOf(p3) < 0)
      t3[p3] = s3[p3];
    if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i3 = 0, p3 = Object.getOwnPropertySymbols(s3); i3 < p3.length; i3++) {
        if (e3.indexOf(p3[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p3[i3]))
          t3[p3[i3]] = s3[p3[i3]];
      }
    return t3;
  }
  function __decorate2(decorators, target, key, desc) {
    var c3 = arguments.length, r3 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r3 = Reflect.decorate(decorators, target, key, desc);
    else for (var i3 = decorators.length - 1; i3 >= 0; i3--) if (d3 = decorators[i3]) r3 = (c3 < 3 ? d3(r3) : c3 > 3 ? d3(target, key, r3) : d3(target, key)) || r3;
    return c3 > 3 && r3 && Object.defineProperty(target, key, r3), r3;
  }
  function __param2(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __metadata2(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter2(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e3) {
          reject(e3);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e3) {
          reject(e3);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator2(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t3[0] & 1) throw t3[1];
      return t3[1];
    }, trys: [], ops: [] }, f3, y2, t3, g3;
    return g3 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g3[Symbol.iterator] = function() {
      return this;
    }), g3;
    function verb(n3) {
      return function(v3) {
        return step([n3, v3]);
      };
    }
    function step(op) {
      if (f3) throw new TypeError("Generator is already executing.");
      while (_) try {
        if (f3 = 1, y2 && (t3 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t3 = y2["return"]) && t3.call(y2), 0) : y2.next) && !(t3 = t3.call(y2, op[1])).done) return t3;
        if (y2 = 0, t3) op = [op[0] & 2, t3.value];
        switch (op[0]) {
          case 0:
          case 1:
            t3 = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t3 = _.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t3[1]) {
              _.label = t3[1];
              t3 = op;
              break;
            }
            if (t3 && _.label < t3[2]) {
              _.label = t3[2];
              _.ops.push(op);
              break;
            }
            if (t3[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e3) {
        op = [6, e3];
        y2 = 0;
      } finally {
        f3 = t3 = 0;
      }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __createBinding2(o3, m3, k3, k22) {
    if (k22 === void 0) k22 = k3;
    o3[k22] = m3[k3];
  }
  function __exportStar2(m3, exports) {
    for (var p3 in m3) if (p3 !== "default" && !exports.hasOwnProperty(p3)) exports[p3] = m3[p3];
  }
  function __values2(o3) {
    var s3 = typeof Symbol === "function" && Symbol.iterator, m3 = s3 && o3[s3], i3 = 0;
    if (m3) return m3.call(o3);
    if (o3 && typeof o3.length === "number") return {
      next: function() {
        if (o3 && i3 >= o3.length) o3 = void 0;
        return { value: o3 && o3[i3++], done: !o3 };
      }
    };
    throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read2(o3, n3) {
    var m3 = typeof Symbol === "function" && o3[Symbol.iterator];
    if (!m3) return o3;
    var i3 = m3.call(o3), r3, ar = [], e3;
    try {
      while ((n3 === void 0 || n3-- > 0) && !(r3 = i3.next()).done) ar.push(r3.value);
    } catch (error) {
      e3 = { error };
    } finally {
      try {
        if (r3 && !r3.done && (m3 = i3["return"])) m3.call(i3);
      } finally {
        if (e3) throw e3.error;
      }
    }
    return ar;
  }
  function __spread2() {
    for (var ar = [], i3 = 0; i3 < arguments.length; i3++)
      ar = ar.concat(__read2(arguments[i3]));
    return ar;
  }
  function __spreadArrays2() {
    for (var s3 = 0, i3 = 0, il = arguments.length; i3 < il; i3++) s3 += arguments[i3].length;
    for (var r3 = Array(s3), k3 = 0, i3 = 0; i3 < il; i3++)
      for (var a3 = arguments[i3], j3 = 0, jl = a3.length; j3 < jl; j3++, k3++)
        r3[k3] = a3[j3];
    return r3;
  }
  function __await2(v3) {
    return this instanceof __await2 ? (this.v = v3, this) : new __await2(v3);
  }
  function __asyncGenerator2(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g3 = generator.apply(thisArg, _arguments || []), i3, q3 = [];
    return i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
      return this;
    }, i3;
    function verb(n3) {
      if (g3[n3]) i3[n3] = function(v3) {
        return new Promise(function(a3, b3) {
          q3.push([n3, v3, a3, b3]) > 1 || resume(n3, v3);
        });
      };
    }
    function resume(n3, v3) {
      try {
        step(g3[n3](v3));
      } catch (e3) {
        settle(q3[0][3], e3);
      }
    }
    function step(r3) {
      r3.value instanceof __await2 ? Promise.resolve(r3.value.v).then(fulfill, reject) : settle(q3[0][2], r3);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f3, v3) {
      if (f3(v3), q3.shift(), q3.length) resume(q3[0][0], q3[0][1]);
    }
  }
  function __asyncDelegator2(o3) {
    var i3, p3;
    return i3 = {}, verb("next"), verb("throw", function(e3) {
      throw e3;
    }), verb("return"), i3[Symbol.iterator] = function() {
      return this;
    }, i3;
    function verb(n3, f3) {
      i3[n3] = o3[n3] ? function(v3) {
        return (p3 = !p3) ? { value: __await2(o3[n3](v3)), done: n3 === "return" } : f3 ? f3(v3) : v3;
      } : f3;
    }
  }
  function __asyncValues2(o3) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m3 = o3[Symbol.asyncIterator], i3;
    return m3 ? m3.call(o3) : (o3 = typeof __values2 === "function" ? __values2(o3) : o3[Symbol.iterator](), i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
      return this;
    }, i3);
    function verb(n3) {
      i3[n3] = o3[n3] && function(v3) {
        return new Promise(function(resolve, reject) {
          v3 = o3[n3](v3), settle(resolve, reject, v3.done, v3.value);
        });
      };
    }
    function settle(resolve, reject, d3, v3) {
      Promise.resolve(v3).then(function(v5) {
        resolve({ value: v5, done: d3 });
      }, reject);
    }
  }
  function __makeTemplateObject2(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }
  function __importStar2(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
      for (var k3 in mod) if (Object.hasOwnProperty.call(mod, k3)) result[k3] = mod[k3];
    }
    result.default = mod;
    return result;
  }
  function __importDefault2(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  }
  function __classPrivateFieldGet2(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
  }
  function __classPrivateFieldSet2(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
  }
  var extendStatics2, __assign2;
  var init_tslib_es62 = __esm({
    "node_modules/@aws-crypto/sha256-js/node_modules/tslib/tslib.es6.js"() {
      extendStatics2 = function(d3, b3) {
        extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d4, b4) {
          d4.__proto__ = b4;
        } || function(d4, b4) {
          for (var p3 in b4) if (b4.hasOwnProperty(p3)) d4[p3] = b4[p3];
        };
        return extendStatics2(d3, b3);
      };
      __assign2 = function() {
        __assign2 = Object.assign || function __assign5(t3) {
          for (var s3, i3 = 1, n3 = arguments.length; i3 < n3; i3++) {
            s3 = arguments[i3];
            for (var p3 in s3) if (Object.prototype.hasOwnProperty.call(s3, p3)) t3[p3] = s3[p3];
          }
          return t3;
        };
        return __assign2.apply(this, arguments);
      };
    }
  });

  // node_modules/@aws-crypto/sha256-js/build/constants.js
  var require_constants2 = __commonJS({
    "node_modules/@aws-crypto/sha256-js/build/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MAX_HASHABLE_LENGTH = exports.INIT = exports.KEY = exports.DIGEST_LENGTH = exports.BLOCK_SIZE = void 0;
      exports.BLOCK_SIZE = 64;
      exports.DIGEST_LENGTH = 32;
      exports.KEY = new Uint32Array([
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ]);
      exports.INIT = [
        1779033703,
        3144134277,
        1013904242,
        2773480762,
        1359893119,
        2600822924,
        528734635,
        1541459225
      ];
      exports.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
    }
  });

  // node_modules/@aws-crypto/sha256-js/build/RawSha256.js
  var require_RawSha256 = __commonJS({
    "node_modules/@aws-crypto/sha256-js/build/RawSha256.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.RawSha256 = void 0;
      var constants_1 = require_constants2();
      var RawSha256 = (
        /** @class */
        function() {
          function RawSha2562() {
            this.state = Int32Array.from(constants_1.INIT);
            this.temp = new Int32Array(64);
            this.buffer = new Uint8Array(64);
            this.bufferLength = 0;
            this.bytesHashed = 0;
            this.finished = false;
          }
          RawSha2562.prototype.update = function(data) {
            if (this.finished) {
              throw new Error("Attempted to update an already finished hash.");
            }
            var position = 0;
            var byteLength = data.byteLength;
            this.bytesHashed += byteLength;
            if (this.bytesHashed * 8 > constants_1.MAX_HASHABLE_LENGTH) {
              throw new Error("Cannot hash more than 2^53 - 1 bits");
            }
            while (byteLength > 0) {
              this.buffer[this.bufferLength++] = data[position++];
              byteLength--;
              if (this.bufferLength === constants_1.BLOCK_SIZE) {
                this.hashBuffer();
                this.bufferLength = 0;
              }
            }
          };
          RawSha2562.prototype.digest = function() {
            if (!this.finished) {
              var bitsHashed = this.bytesHashed * 8;
              var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
              var undecoratedLength = this.bufferLength;
              bufferView.setUint8(this.bufferLength++, 128);
              if (undecoratedLength % constants_1.BLOCK_SIZE >= constants_1.BLOCK_SIZE - 8) {
                for (var i3 = this.bufferLength; i3 < constants_1.BLOCK_SIZE; i3++) {
                  bufferView.setUint8(i3, 0);
                }
                this.hashBuffer();
                this.bufferLength = 0;
              }
              for (var i3 = this.bufferLength; i3 < constants_1.BLOCK_SIZE - 8; i3++) {
                bufferView.setUint8(i3, 0);
              }
              bufferView.setUint32(constants_1.BLOCK_SIZE - 8, Math.floor(bitsHashed / 4294967296), true);
              bufferView.setUint32(constants_1.BLOCK_SIZE - 4, bitsHashed);
              this.hashBuffer();
              this.finished = true;
            }
            var out = new Uint8Array(constants_1.DIGEST_LENGTH);
            for (var i3 = 0; i3 < 8; i3++) {
              out[i3 * 4] = this.state[i3] >>> 24 & 255;
              out[i3 * 4 + 1] = this.state[i3] >>> 16 & 255;
              out[i3 * 4 + 2] = this.state[i3] >>> 8 & 255;
              out[i3 * 4 + 3] = this.state[i3] >>> 0 & 255;
            }
            return out;
          };
          RawSha2562.prototype.hashBuffer = function() {
            var _a = this, buffer = _a.buffer, state = _a.state;
            var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
            for (var i3 = 0; i3 < constants_1.BLOCK_SIZE; i3++) {
              if (i3 < 16) {
                this.temp[i3] = (buffer[i3 * 4] & 255) << 24 | (buffer[i3 * 4 + 1] & 255) << 16 | (buffer[i3 * 4 + 2] & 255) << 8 | buffer[i3 * 4 + 3] & 255;
              } else {
                var u3 = this.temp[i3 - 2];
                var t1_1 = (u3 >>> 17 | u3 << 15) ^ (u3 >>> 19 | u3 << 13) ^ u3 >>> 10;
                u3 = this.temp[i3 - 15];
                var t2_1 = (u3 >>> 7 | u3 << 25) ^ (u3 >>> 18 | u3 << 14) ^ u3 >>> 3;
                this.temp[i3] = (t1_1 + this.temp[i3 - 7] | 0) + (t2_1 + this.temp[i3 - 16] | 0);
              }
              var t1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (constants_1.KEY[i3] + this.temp[i3] | 0) | 0) | 0;
              var t22 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
              state7 = state6;
              state6 = state5;
              state5 = state4;
              state4 = state3 + t1 | 0;
              state3 = state2;
              state2 = state1;
              state1 = state0;
              state0 = t1 + t22 | 0;
            }
            state[0] += state0;
            state[1] += state1;
            state[2] += state2;
            state[3] += state3;
            state[4] += state4;
            state[5] += state5;
            state[6] += state6;
            state[7] += state7;
          };
          return RawSha2562;
        }()
      );
      exports.RawSha256 = RawSha256;
    }
  });

  // node_modules/@aws-crypto/sha256-js/build/jsSha256.js
  var require_jsSha256 = __commonJS({
    "node_modules/@aws-crypto/sha256-js/build/jsSha256.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Sha256 = void 0;
      var tslib_1 = (init_tslib_es62(), __toCommonJS(tslib_es6_exports2));
      var constants_1 = require_constants2();
      var RawSha256_1 = require_RawSha256();
      var util_1 = require_build();
      var Sha2563 = (
        /** @class */
        function() {
          function Sha2564(secret) {
            this.secret = secret;
            this.hash = new RawSha256_1.RawSha256();
            this.reset();
          }
          Sha2564.prototype.update = function(toHash) {
            if ((0, util_1.isEmptyData)(toHash) || this.error) {
              return;
            }
            try {
              this.hash.update((0, util_1.convertToBuffer)(toHash));
            } catch (e3) {
              this.error = e3;
            }
          };
          Sha2564.prototype.digestSync = function() {
            if (this.error) {
              throw this.error;
            }
            if (this.outer) {
              if (!this.outer.finished) {
                this.outer.update(this.hash.digest());
              }
              return this.outer.digest();
            }
            return this.hash.digest();
          };
          Sha2564.prototype.digest = function() {
            return tslib_1.__awaiter(this, void 0, void 0, function() {
              return tslib_1.__generator(this, function(_a) {
                return [2, this.digestSync()];
              });
            });
          };
          Sha2564.prototype.reset = function() {
            this.hash = new RawSha256_1.RawSha256();
            if (this.secret) {
              this.outer = new RawSha256_1.RawSha256();
              var inner = bufferFromSecret(this.secret);
              var outer = new Uint8Array(constants_1.BLOCK_SIZE);
              outer.set(inner);
              for (var i3 = 0; i3 < constants_1.BLOCK_SIZE; i3++) {
                inner[i3] ^= 54;
                outer[i3] ^= 92;
              }
              this.hash.update(inner);
              this.outer.update(outer);
              for (var i3 = 0; i3 < inner.byteLength; i3++) {
                inner[i3] = 0;
              }
            }
          };
          return Sha2564;
        }()
      );
      exports.Sha256 = Sha2563;
      function bufferFromSecret(secret) {
        var input = (0, util_1.convertToBuffer)(secret);
        if (input.byteLength > constants_1.BLOCK_SIZE) {
          var bufferHash = new RawSha256_1.RawSha256();
          bufferHash.update(input);
          input = bufferHash.digest();
        }
        var buffer = new Uint8Array(constants_1.BLOCK_SIZE);
        buffer.set(input);
        return buffer;
      }
    }
  });

  // node_modules/@aws-crypto/sha256-js/build/index.js
  var require_build2 = __commonJS({
    "node_modules/@aws-crypto/sha256-js/build/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es62(), __toCommonJS(tslib_es6_exports2));
      tslib_1.__exportStar(require_jsSha256(), exports);
    }
  });

  // node_modules/@aws-crypto/supports-web-crypto/node_modules/tslib/tslib.es6.js
  var tslib_es6_exports3 = {};
  __export(tslib_es6_exports3, {
    __assign: () => __assign3,
    __asyncDelegator: () => __asyncDelegator3,
    __asyncGenerator: () => __asyncGenerator3,
    __asyncValues: () => __asyncValues3,
    __await: () => __await3,
    __awaiter: () => __awaiter3,
    __classPrivateFieldGet: () => __classPrivateFieldGet3,
    __classPrivateFieldSet: () => __classPrivateFieldSet3,
    __createBinding: () => __createBinding3,
    __decorate: () => __decorate3,
    __exportStar: () => __exportStar3,
    __extends: () => __extends3,
    __generator: () => __generator3,
    __importDefault: () => __importDefault3,
    __importStar: () => __importStar3,
    __makeTemplateObject: () => __makeTemplateObject3,
    __metadata: () => __metadata3,
    __param: () => __param3,
    __read: () => __read3,
    __rest: () => __rest3,
    __spread: () => __spread3,
    __spreadArrays: () => __spreadArrays3,
    __values: () => __values3
  });
  function __extends3(d3, b3) {
    extendStatics3(d3, b3);
    function __() {
      this.constructor = d3;
    }
    d3.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
  }
  function __rest3(s3, e3) {
    var t3 = {};
    for (var p3 in s3) if (Object.prototype.hasOwnProperty.call(s3, p3) && e3.indexOf(p3) < 0)
      t3[p3] = s3[p3];
    if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i3 = 0, p3 = Object.getOwnPropertySymbols(s3); i3 < p3.length; i3++) {
        if (e3.indexOf(p3[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p3[i3]))
          t3[p3[i3]] = s3[p3[i3]];
      }
    return t3;
  }
  function __decorate3(decorators, target, key, desc) {
    var c3 = arguments.length, r3 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r3 = Reflect.decorate(decorators, target, key, desc);
    else for (var i3 = decorators.length - 1; i3 >= 0; i3--) if (d3 = decorators[i3]) r3 = (c3 < 3 ? d3(r3) : c3 > 3 ? d3(target, key, r3) : d3(target, key)) || r3;
    return c3 > 3 && r3 && Object.defineProperty(target, key, r3), r3;
  }
  function __param3(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __metadata3(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter3(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e3) {
          reject(e3);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e3) {
          reject(e3);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator3(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t3[0] & 1) throw t3[1];
      return t3[1];
    }, trys: [], ops: [] }, f3, y2, t3, g3;
    return g3 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g3[Symbol.iterator] = function() {
      return this;
    }), g3;
    function verb(n3) {
      return function(v3) {
        return step([n3, v3]);
      };
    }
    function step(op) {
      if (f3) throw new TypeError("Generator is already executing.");
      while (_) try {
        if (f3 = 1, y2 && (t3 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t3 = y2["return"]) && t3.call(y2), 0) : y2.next) && !(t3 = t3.call(y2, op[1])).done) return t3;
        if (y2 = 0, t3) op = [op[0] & 2, t3.value];
        switch (op[0]) {
          case 0:
          case 1:
            t3 = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t3 = _.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t3[1]) {
              _.label = t3[1];
              t3 = op;
              break;
            }
            if (t3 && _.label < t3[2]) {
              _.label = t3[2];
              _.ops.push(op);
              break;
            }
            if (t3[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e3) {
        op = [6, e3];
        y2 = 0;
      } finally {
        f3 = t3 = 0;
      }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __createBinding3(o3, m3, k3, k22) {
    if (k22 === void 0) k22 = k3;
    o3[k22] = m3[k3];
  }
  function __exportStar3(m3, exports) {
    for (var p3 in m3) if (p3 !== "default" && !exports.hasOwnProperty(p3)) exports[p3] = m3[p3];
  }
  function __values3(o3) {
    var s3 = typeof Symbol === "function" && Symbol.iterator, m3 = s3 && o3[s3], i3 = 0;
    if (m3) return m3.call(o3);
    if (o3 && typeof o3.length === "number") return {
      next: function() {
        if (o3 && i3 >= o3.length) o3 = void 0;
        return { value: o3 && o3[i3++], done: !o3 };
      }
    };
    throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read3(o3, n3) {
    var m3 = typeof Symbol === "function" && o3[Symbol.iterator];
    if (!m3) return o3;
    var i3 = m3.call(o3), r3, ar = [], e3;
    try {
      while ((n3 === void 0 || n3-- > 0) && !(r3 = i3.next()).done) ar.push(r3.value);
    } catch (error) {
      e3 = { error };
    } finally {
      try {
        if (r3 && !r3.done && (m3 = i3["return"])) m3.call(i3);
      } finally {
        if (e3) throw e3.error;
      }
    }
    return ar;
  }
  function __spread3() {
    for (var ar = [], i3 = 0; i3 < arguments.length; i3++)
      ar = ar.concat(__read3(arguments[i3]));
    return ar;
  }
  function __spreadArrays3() {
    for (var s3 = 0, i3 = 0, il = arguments.length; i3 < il; i3++) s3 += arguments[i3].length;
    for (var r3 = Array(s3), k3 = 0, i3 = 0; i3 < il; i3++)
      for (var a3 = arguments[i3], j3 = 0, jl = a3.length; j3 < jl; j3++, k3++)
        r3[k3] = a3[j3];
    return r3;
  }
  function __await3(v3) {
    return this instanceof __await3 ? (this.v = v3, this) : new __await3(v3);
  }
  function __asyncGenerator3(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g3 = generator.apply(thisArg, _arguments || []), i3, q3 = [];
    return i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
      return this;
    }, i3;
    function verb(n3) {
      if (g3[n3]) i3[n3] = function(v3) {
        return new Promise(function(a3, b3) {
          q3.push([n3, v3, a3, b3]) > 1 || resume(n3, v3);
        });
      };
    }
    function resume(n3, v3) {
      try {
        step(g3[n3](v3));
      } catch (e3) {
        settle(q3[0][3], e3);
      }
    }
    function step(r3) {
      r3.value instanceof __await3 ? Promise.resolve(r3.value.v).then(fulfill, reject) : settle(q3[0][2], r3);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f3, v3) {
      if (f3(v3), q3.shift(), q3.length) resume(q3[0][0], q3[0][1]);
    }
  }
  function __asyncDelegator3(o3) {
    var i3, p3;
    return i3 = {}, verb("next"), verb("throw", function(e3) {
      throw e3;
    }), verb("return"), i3[Symbol.iterator] = function() {
      return this;
    }, i3;
    function verb(n3, f3) {
      i3[n3] = o3[n3] ? function(v3) {
        return (p3 = !p3) ? { value: __await3(o3[n3](v3)), done: n3 === "return" } : f3 ? f3(v3) : v3;
      } : f3;
    }
  }
  function __asyncValues3(o3) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m3 = o3[Symbol.asyncIterator], i3;
    return m3 ? m3.call(o3) : (o3 = typeof __values3 === "function" ? __values3(o3) : o3[Symbol.iterator](), i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
      return this;
    }, i3);
    function verb(n3) {
      i3[n3] = o3[n3] && function(v3) {
        return new Promise(function(resolve, reject) {
          v3 = o3[n3](v3), settle(resolve, reject, v3.done, v3.value);
        });
      };
    }
    function settle(resolve, reject, d3, v3) {
      Promise.resolve(v3).then(function(v5) {
        resolve({ value: v5, done: d3 });
      }, reject);
    }
  }
  function __makeTemplateObject3(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }
  function __importStar3(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
      for (var k3 in mod) if (Object.hasOwnProperty.call(mod, k3)) result[k3] = mod[k3];
    }
    result.default = mod;
    return result;
  }
  function __importDefault3(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  }
  function __classPrivateFieldGet3(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
  }
  function __classPrivateFieldSet3(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
  }
  var extendStatics3, __assign3;
  var init_tslib_es63 = __esm({
    "node_modules/@aws-crypto/supports-web-crypto/node_modules/tslib/tslib.es6.js"() {
      extendStatics3 = function(d3, b3) {
        extendStatics3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d4, b4) {
          d4.__proto__ = b4;
        } || function(d4, b4) {
          for (var p3 in b4) if (b4.hasOwnProperty(p3)) d4[p3] = b4[p3];
        };
        return extendStatics3(d3, b3);
      };
      __assign3 = function() {
        __assign3 = Object.assign || function __assign5(t3) {
          for (var s3, i3 = 1, n3 = arguments.length; i3 < n3; i3++) {
            s3 = arguments[i3];
            for (var p3 in s3) if (Object.prototype.hasOwnProperty.call(s3, p3)) t3[p3] = s3[p3];
          }
          return t3;
        };
        return __assign3.apply(this, arguments);
      };
    }
  });

  // node_modules/@aws-crypto/supports-web-crypto/build/supportsWebCrypto.js
  var require_supportsWebCrypto = __commonJS({
    "node_modules/@aws-crypto/supports-web-crypto/build/supportsWebCrypto.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.supportsZeroByteGCM = exports.supportsSubtleCrypto = exports.supportsSecureRandom = exports.supportsWebCrypto = void 0;
      var tslib_1 = (init_tslib_es63(), __toCommonJS(tslib_es6_exports3));
      var subtleCryptoMethods = [
        "decrypt",
        "digest",
        "encrypt",
        "exportKey",
        "generateKey",
        "importKey",
        "sign",
        "verify"
      ];
      function supportsWebCrypto(window2) {
        if (supportsSecureRandom(window2) && typeof window2.crypto.subtle === "object") {
          var subtle = window2.crypto.subtle;
          return supportsSubtleCrypto(subtle);
        }
        return false;
      }
      exports.supportsWebCrypto = supportsWebCrypto;
      function supportsSecureRandom(window2) {
        if (typeof window2 === "object" && typeof window2.crypto === "object") {
          var getRandomValues2 = window2.crypto.getRandomValues;
          return typeof getRandomValues2 === "function";
        }
        return false;
      }
      exports.supportsSecureRandom = supportsSecureRandom;
      function supportsSubtleCrypto(subtle) {
        return subtle && subtleCryptoMethods.every(function(methodName) {
          return typeof subtle[methodName] === "function";
        });
      }
      exports.supportsSubtleCrypto = supportsSubtleCrypto;
      function supportsZeroByteGCM(subtle) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var key, zeroByteAuthTag, _a;
          return tslib_1.__generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                if (!supportsSubtleCrypto(subtle))
                  return [2, false];
                _b.label = 1;
              case 1:
                _b.trys.push([1, 4, , 5]);
                return [4, subtle.generateKey({ name: "AES-GCM", length: 128 }, false, ["encrypt"])];
              case 2:
                key = _b.sent();
                return [4, subtle.encrypt({
                  name: "AES-GCM",
                  iv: new Uint8Array(Array(12)),
                  additionalData: new Uint8Array(Array(16)),
                  tagLength: 128
                }, key, new Uint8Array(0))];
              case 3:
                zeroByteAuthTag = _b.sent();
                return [2, zeroByteAuthTag.byteLength === 16];
              case 4:
                _a = _b.sent();
                return [2, false];
              case 5:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }
      exports.supportsZeroByteGCM = supportsZeroByteGCM;
    }
  });

  // node_modules/@aws-crypto/supports-web-crypto/build/index.js
  var require_build3 = __commonJS({
    "node_modules/@aws-crypto/supports-web-crypto/build/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es63(), __toCommonJS(tslib_es6_exports3));
      tslib_1.__exportStar(require_supportsWebCrypto(), exports);
    }
  });

  // node_modules/@aws-crypto/ie11-detection/node_modules/tslib/tslib.es6.js
  var tslib_es6_exports4 = {};
  __export(tslib_es6_exports4, {
    __assign: () => __assign4,
    __asyncDelegator: () => __asyncDelegator4,
    __asyncGenerator: () => __asyncGenerator4,
    __asyncValues: () => __asyncValues4,
    __await: () => __await4,
    __awaiter: () => __awaiter4,
    __classPrivateFieldGet: () => __classPrivateFieldGet4,
    __classPrivateFieldSet: () => __classPrivateFieldSet4,
    __createBinding: () => __createBinding4,
    __decorate: () => __decorate4,
    __exportStar: () => __exportStar4,
    __extends: () => __extends4,
    __generator: () => __generator4,
    __importDefault: () => __importDefault4,
    __importStar: () => __importStar4,
    __makeTemplateObject: () => __makeTemplateObject4,
    __metadata: () => __metadata4,
    __param: () => __param4,
    __read: () => __read4,
    __rest: () => __rest4,
    __spread: () => __spread4,
    __spreadArrays: () => __spreadArrays4,
    __values: () => __values4
  });
  function __extends4(d3, b3) {
    extendStatics4(d3, b3);
    function __() {
      this.constructor = d3;
    }
    d3.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
  }
  function __rest4(s3, e3) {
    var t3 = {};
    for (var p3 in s3) if (Object.prototype.hasOwnProperty.call(s3, p3) && e3.indexOf(p3) < 0)
      t3[p3] = s3[p3];
    if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i3 = 0, p3 = Object.getOwnPropertySymbols(s3); i3 < p3.length; i3++) {
        if (e3.indexOf(p3[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p3[i3]))
          t3[p3[i3]] = s3[p3[i3]];
      }
    return t3;
  }
  function __decorate4(decorators, target, key, desc) {
    var c3 = arguments.length, r3 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r3 = Reflect.decorate(decorators, target, key, desc);
    else for (var i3 = decorators.length - 1; i3 >= 0; i3--) if (d3 = decorators[i3]) r3 = (c3 < 3 ? d3(r3) : c3 > 3 ? d3(target, key, r3) : d3(target, key)) || r3;
    return c3 > 3 && r3 && Object.defineProperty(target, key, r3), r3;
  }
  function __param4(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __metadata4(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter4(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e3) {
          reject(e3);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e3) {
          reject(e3);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator4(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t3[0] & 1) throw t3[1];
      return t3[1];
    }, trys: [], ops: [] }, f3, y2, t3, g3;
    return g3 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g3[Symbol.iterator] = function() {
      return this;
    }), g3;
    function verb(n3) {
      return function(v3) {
        return step([n3, v3]);
      };
    }
    function step(op) {
      if (f3) throw new TypeError("Generator is already executing.");
      while (_) try {
        if (f3 = 1, y2 && (t3 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t3 = y2["return"]) && t3.call(y2), 0) : y2.next) && !(t3 = t3.call(y2, op[1])).done) return t3;
        if (y2 = 0, t3) op = [op[0] & 2, t3.value];
        switch (op[0]) {
          case 0:
          case 1:
            t3 = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t3 = _.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t3[1]) {
              _.label = t3[1];
              t3 = op;
              break;
            }
            if (t3 && _.label < t3[2]) {
              _.label = t3[2];
              _.ops.push(op);
              break;
            }
            if (t3[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e3) {
        op = [6, e3];
        y2 = 0;
      } finally {
        f3 = t3 = 0;
      }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __createBinding4(o3, m3, k3, k22) {
    if (k22 === void 0) k22 = k3;
    o3[k22] = m3[k3];
  }
  function __exportStar4(m3, exports) {
    for (var p3 in m3) if (p3 !== "default" && !exports.hasOwnProperty(p3)) exports[p3] = m3[p3];
  }
  function __values4(o3) {
    var s3 = typeof Symbol === "function" && Symbol.iterator, m3 = s3 && o3[s3], i3 = 0;
    if (m3) return m3.call(o3);
    if (o3 && typeof o3.length === "number") return {
      next: function() {
        if (o3 && i3 >= o3.length) o3 = void 0;
        return { value: o3 && o3[i3++], done: !o3 };
      }
    };
    throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read4(o3, n3) {
    var m3 = typeof Symbol === "function" && o3[Symbol.iterator];
    if (!m3) return o3;
    var i3 = m3.call(o3), r3, ar = [], e3;
    try {
      while ((n3 === void 0 || n3-- > 0) && !(r3 = i3.next()).done) ar.push(r3.value);
    } catch (error) {
      e3 = { error };
    } finally {
      try {
        if (r3 && !r3.done && (m3 = i3["return"])) m3.call(i3);
      } finally {
        if (e3) throw e3.error;
      }
    }
    return ar;
  }
  function __spread4() {
    for (var ar = [], i3 = 0; i3 < arguments.length; i3++)
      ar = ar.concat(__read4(arguments[i3]));
    return ar;
  }
  function __spreadArrays4() {
    for (var s3 = 0, i3 = 0, il = arguments.length; i3 < il; i3++) s3 += arguments[i3].length;
    for (var r3 = Array(s3), k3 = 0, i3 = 0; i3 < il; i3++)
      for (var a3 = arguments[i3], j3 = 0, jl = a3.length; j3 < jl; j3++, k3++)
        r3[k3] = a3[j3];
    return r3;
  }
  function __await4(v3) {
    return this instanceof __await4 ? (this.v = v3, this) : new __await4(v3);
  }
  function __asyncGenerator4(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g3 = generator.apply(thisArg, _arguments || []), i3, q3 = [];
    return i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
      return this;
    }, i3;
    function verb(n3) {
      if (g3[n3]) i3[n3] = function(v3) {
        return new Promise(function(a3, b3) {
          q3.push([n3, v3, a3, b3]) > 1 || resume(n3, v3);
        });
      };
    }
    function resume(n3, v3) {
      try {
        step(g3[n3](v3));
      } catch (e3) {
        settle(q3[0][3], e3);
      }
    }
    function step(r3) {
      r3.value instanceof __await4 ? Promise.resolve(r3.value.v).then(fulfill, reject) : settle(q3[0][2], r3);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f3, v3) {
      if (f3(v3), q3.shift(), q3.length) resume(q3[0][0], q3[0][1]);
    }
  }
  function __asyncDelegator4(o3) {
    var i3, p3;
    return i3 = {}, verb("next"), verb("throw", function(e3) {
      throw e3;
    }), verb("return"), i3[Symbol.iterator] = function() {
      return this;
    }, i3;
    function verb(n3, f3) {
      i3[n3] = o3[n3] ? function(v3) {
        return (p3 = !p3) ? { value: __await4(o3[n3](v3)), done: n3 === "return" } : f3 ? f3(v3) : v3;
      } : f3;
    }
  }
  function __asyncValues4(o3) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m3 = o3[Symbol.asyncIterator], i3;
    return m3 ? m3.call(o3) : (o3 = typeof __values4 === "function" ? __values4(o3) : o3[Symbol.iterator](), i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
      return this;
    }, i3);
    function verb(n3) {
      i3[n3] = o3[n3] && function(v3) {
        return new Promise(function(resolve, reject) {
          v3 = o3[n3](v3), settle(resolve, reject, v3.done, v3.value);
        });
      };
    }
    function settle(resolve, reject, d3, v3) {
      Promise.resolve(v3).then(function(v5) {
        resolve({ value: v5, done: d3 });
      }, reject);
    }
  }
  function __makeTemplateObject4(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }
  function __importStar4(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
      for (var k3 in mod) if (Object.hasOwnProperty.call(mod, k3)) result[k3] = mod[k3];
    }
    result.default = mod;
    return result;
  }
  function __importDefault4(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  }
  function __classPrivateFieldGet4(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
  }
  function __classPrivateFieldSet4(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
  }
  var extendStatics4, __assign4;
  var init_tslib_es64 = __esm({
    "node_modules/@aws-crypto/ie11-detection/node_modules/tslib/tslib.es6.js"() {
      extendStatics4 = function(d3, b3) {
        extendStatics4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d4, b4) {
          d4.__proto__ = b4;
        } || function(d4, b4) {
          for (var p3 in b4) if (b4.hasOwnProperty(p3)) d4[p3] = b4[p3];
        };
        return extendStatics4(d3, b3);
      };
      __assign4 = function() {
        __assign4 = Object.assign || function __assign5(t3) {
          for (var s3, i3 = 1, n3 = arguments.length; i3 < n3; i3++) {
            s3 = arguments[i3];
            for (var p3 in s3) if (Object.prototype.hasOwnProperty.call(s3, p3)) t3[p3] = s3[p3];
          }
          return t3;
        };
        return __assign4.apply(this, arguments);
      };
    }
  });

  // node_modules/@aws-crypto/ie11-detection/build/CryptoOperation.js
  var require_CryptoOperation = __commonJS({
    "node_modules/@aws-crypto/ie11-detection/build/CryptoOperation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@aws-crypto/ie11-detection/build/Key.js
  var require_Key = __commonJS({
    "node_modules/@aws-crypto/ie11-detection/build/Key.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@aws-crypto/ie11-detection/build/KeyOperation.js
  var require_KeyOperation = __commonJS({
    "node_modules/@aws-crypto/ie11-detection/build/KeyOperation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@aws-crypto/ie11-detection/build/MsSubtleCrypto.js
  var require_MsSubtleCrypto = __commonJS({
    "node_modules/@aws-crypto/ie11-detection/build/MsSubtleCrypto.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@aws-crypto/ie11-detection/build/MsWindow.js
  var require_MsWindow = __commonJS({
    "node_modules/@aws-crypto/ie11-detection/build/MsWindow.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isMsWindow = void 0;
      var msSubtleCryptoMethods = [
        "decrypt",
        "digest",
        "encrypt",
        "exportKey",
        "generateKey",
        "importKey",
        "sign",
        "verify"
      ];
      function quacksLikeAnMsWindow(window2) {
        return "MSInputMethodContext" in window2 && "msCrypto" in window2;
      }
      function isMsWindow(window2) {
        if (quacksLikeAnMsWindow(window2) && window2.msCrypto.subtle !== void 0) {
          var _a = window2.msCrypto, getRandomValues2 = _a.getRandomValues, subtle_1 = _a.subtle;
          return msSubtleCryptoMethods.map(function(methodName) {
            return subtle_1[methodName];
          }).concat(getRandomValues2).every(function(method) {
            return typeof method === "function";
          });
        }
        return false;
      }
      exports.isMsWindow = isMsWindow;
    }
  });

  // node_modules/@aws-crypto/ie11-detection/build/index.js
  var require_build4 = __commonJS({
    "node_modules/@aws-crypto/ie11-detection/build/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es64(), __toCommonJS(tslib_es6_exports4));
      tslib_1.__exportStar(require_CryptoOperation(), exports);
      tslib_1.__exportStar(require_Key(), exports);
      tslib_1.__exportStar(require_KeyOperation(), exports);
      tslib_1.__exportStar(require_MsSubtleCrypto(), exports);
      tslib_1.__exportStar(require_MsWindow(), exports);
    }
  });

  // node_modules/@aws-crypto/sha256-browser/build/crossPlatformSha256.js
  var require_crossPlatformSha256 = __commonJS({
    "node_modules/@aws-crypto/sha256-browser/build/crossPlatformSha256.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Sha256 = void 0;
      var ie11Sha256_1 = require_ie11Sha256();
      var webCryptoSha256_1 = require_webCryptoSha256();
      var sha256_js_1 = require_build2();
      var supports_web_crypto_1 = require_build3();
      var ie11_detection_1 = require_build4();
      var util_locate_window_1 = require_dist_cjs2();
      var util_1 = require_build();
      var Sha2563 = (
        /** @class */
        function() {
          function Sha2564(secret) {
            if ((0, supports_web_crypto_1.supportsWebCrypto)((0, util_locate_window_1.locateWindow)())) {
              this.hash = new webCryptoSha256_1.Sha256(secret);
            } else if ((0, ie11_detection_1.isMsWindow)((0, util_locate_window_1.locateWindow)())) {
              this.hash = new ie11Sha256_1.Sha256(secret);
            } else {
              this.hash = new sha256_js_1.Sha256(secret);
            }
          }
          Sha2564.prototype.update = function(data, encoding) {
            this.hash.update((0, util_1.convertToBuffer)(data));
          };
          Sha2564.prototype.digest = function() {
            return this.hash.digest();
          };
          Sha2564.prototype.reset = function() {
            this.hash.reset();
          };
          return Sha2564;
        }()
      );
      exports.Sha256 = Sha2563;
    }
  });

  // node_modules/@aws-crypto/sha256-browser/build/index.js
  var require_build5 = __commonJS({
    "node_modules/@aws-crypto/sha256-browser/build/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.WebCryptoSha256 = exports.Ie11Sha256 = void 0;
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_crossPlatformSha256(), exports);
      var ie11Sha256_1 = require_ie11Sha256();
      Object.defineProperty(exports, "Ie11Sha256", { enumerable: true, get: function() {
        return ie11Sha256_1.Sha256;
      } });
      var webCryptoSha256_1 = require_webCryptoSha256();
      Object.defineProperty(exports, "WebCryptoSha256", { enumerable: true, get: function() {
        return webCryptoSha256_1.Sha256;
      } });
    }
  });

  // node_modules/bowser/es5.js
  var require_es5 = __commonJS({
    "node_modules/bowser/es5.js"(exports, module) {
      !function(e3, t3) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t3() : "function" == typeof define && define.amd ? define([], t3) : "object" == typeof exports ? exports.bowser = t3() : e3.bowser = t3();
      }(exports, function() {
        return function(e3) {
          var t3 = {};
          function r3(n3) {
            if (t3[n3]) return t3[n3].exports;
            var i3 = t3[n3] = { i: n3, l: false, exports: {} };
            return e3[n3].call(i3.exports, i3, i3.exports, r3), i3.l = true, i3.exports;
          }
          return r3.m = e3, r3.c = t3, r3.d = function(e4, t4, n3) {
            r3.o(e4, t4) || Object.defineProperty(e4, t4, { enumerable: true, get: n3 });
          }, r3.r = function(e4) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
          }, r3.t = function(e4, t4) {
            if (1 & t4 && (e4 = r3(e4)), 8 & t4) return e4;
            if (4 & t4 && "object" == typeof e4 && e4 && e4.__esModule) return e4;
            var n3 = /* @__PURE__ */ Object.create(null);
            if (r3.r(n3), Object.defineProperty(n3, "default", { enumerable: true, value: e4 }), 2 & t4 && "string" != typeof e4) for (var i3 in e4) r3.d(n3, i3, function(t5) {
              return e4[t5];
            }.bind(null, i3));
            return n3;
          }, r3.n = function(e4) {
            var t4 = e4 && e4.__esModule ? function() {
              return e4.default;
            } : function() {
              return e4;
            };
            return r3.d(t4, "a", t4), t4;
          }, r3.o = function(e4, t4) {
            return Object.prototype.hasOwnProperty.call(e4, t4);
          }, r3.p = "", r3(r3.s = 90);
        }({ 17: function(e3, t3, r3) {
          "use strict";
          t3.__esModule = true, t3.default = void 0;
          var n3 = r3(18), i3 = function() {
            function e4() {
            }
            return e4.getFirstMatch = function(e5, t4) {
              var r4 = t4.match(e5);
              return r4 && r4.length > 0 && r4[1] || "";
            }, e4.getSecondMatch = function(e5, t4) {
              var r4 = t4.match(e5);
              return r4 && r4.length > 1 && r4[2] || "";
            }, e4.matchAndReturnConst = function(e5, t4, r4) {
              if (e5.test(t4)) return r4;
            }, e4.getWindowsVersionName = function(e5) {
              switch (e5) {
                case "NT":
                  return "NT";
                case "XP":
                  return "XP";
                case "NT 5.0":
                  return "2000";
                case "NT 5.1":
                  return "XP";
                case "NT 5.2":
                  return "2003";
                case "NT 6.0":
                  return "Vista";
                case "NT 6.1":
                  return "7";
                case "NT 6.2":
                  return "8";
                case "NT 6.3":
                  return "8.1";
                case "NT 10.0":
                  return "10";
                default:
                  return;
              }
            }, e4.getMacOSVersionName = function(e5) {
              var t4 = e5.split(".").splice(0, 2).map(function(e6) {
                return parseInt(e6, 10) || 0;
              });
              if (t4.push(0), 10 === t4[0]) switch (t4[1]) {
                case 5:
                  return "Leopard";
                case 6:
                  return "Snow Leopard";
                case 7:
                  return "Lion";
                case 8:
                  return "Mountain Lion";
                case 9:
                  return "Mavericks";
                case 10:
                  return "Yosemite";
                case 11:
                  return "El Capitan";
                case 12:
                  return "Sierra";
                case 13:
                  return "High Sierra";
                case 14:
                  return "Mojave";
                case 15:
                  return "Catalina";
                default:
                  return;
              }
            }, e4.getAndroidVersionName = function(e5) {
              var t4 = e5.split(".").splice(0, 2).map(function(e6) {
                return parseInt(e6, 10) || 0;
              });
              if (t4.push(0), !(1 === t4[0] && t4[1] < 5)) return 1 === t4[0] && t4[1] < 6 ? "Cupcake" : 1 === t4[0] && t4[1] >= 6 ? "Donut" : 2 === t4[0] && t4[1] < 2 ? "Eclair" : 2 === t4[0] && 2 === t4[1] ? "Froyo" : 2 === t4[0] && t4[1] > 2 ? "Gingerbread" : 3 === t4[0] ? "Honeycomb" : 4 === t4[0] && t4[1] < 1 ? "Ice Cream Sandwich" : 4 === t4[0] && t4[1] < 4 ? "Jelly Bean" : 4 === t4[0] && t4[1] >= 4 ? "KitKat" : 5 === t4[0] ? "Lollipop" : 6 === t4[0] ? "Marshmallow" : 7 === t4[0] ? "Nougat" : 8 === t4[0] ? "Oreo" : 9 === t4[0] ? "Pie" : void 0;
            }, e4.getVersionPrecision = function(e5) {
              return e5.split(".").length;
            }, e4.compareVersions = function(t4, r4, n4) {
              void 0 === n4 && (n4 = false);
              var i4 = e4.getVersionPrecision(t4), s3 = e4.getVersionPrecision(r4), a3 = Math.max(i4, s3), o3 = 0, u3 = e4.map([t4, r4], function(t5) {
                var r5 = a3 - e4.getVersionPrecision(t5), n5 = t5 + new Array(r5 + 1).join(".0");
                return e4.map(n5.split("."), function(e5) {
                  return new Array(20 - e5.length).join("0") + e5;
                }).reverse();
              });
              for (n4 && (o3 = a3 - Math.min(i4, s3)), a3 -= 1; a3 >= o3; ) {
                if (u3[0][a3] > u3[1][a3]) return 1;
                if (u3[0][a3] === u3[1][a3]) {
                  if (a3 === o3) return 0;
                  a3 -= 1;
                } else if (u3[0][a3] < u3[1][a3]) return -1;
              }
            }, e4.map = function(e5, t4) {
              var r4, n4 = [];
              if (Array.prototype.map) return Array.prototype.map.call(e5, t4);
              for (r4 = 0; r4 < e5.length; r4 += 1) n4.push(t4(e5[r4]));
              return n4;
            }, e4.find = function(e5, t4) {
              var r4, n4;
              if (Array.prototype.find) return Array.prototype.find.call(e5, t4);
              for (r4 = 0, n4 = e5.length; r4 < n4; r4 += 1) {
                var i4 = e5[r4];
                if (t4(i4, r4)) return i4;
              }
            }, e4.assign = function(e5) {
              for (var t4, r4, n4 = e5, i4 = arguments.length, s3 = new Array(i4 > 1 ? i4 - 1 : 0), a3 = 1; a3 < i4; a3++) s3[a3 - 1] = arguments[a3];
              if (Object.assign) return Object.assign.apply(Object, [e5].concat(s3));
              var o3 = function() {
                var e6 = s3[t4];
                "object" == typeof e6 && null !== e6 && Object.keys(e6).forEach(function(t5) {
                  n4[t5] = e6[t5];
                });
              };
              for (t4 = 0, r4 = s3.length; t4 < r4; t4 += 1) o3();
              return e5;
            }, e4.getBrowserAlias = function(e5) {
              return n3.BROWSER_ALIASES_MAP[e5];
            }, e4.getBrowserTypeByAlias = function(e5) {
              return n3.BROWSER_MAP[e5] || "";
            }, e4;
          }();
          t3.default = i3, e3.exports = t3.default;
        }, 18: function(e3, t3, r3) {
          "use strict";
          t3.__esModule = true, t3.ENGINE_MAP = t3.OS_MAP = t3.PLATFORMS_MAP = t3.BROWSER_MAP = t3.BROWSER_ALIASES_MAP = void 0;
          t3.BROWSER_ALIASES_MAP = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" };
          t3.BROWSER_MAP = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" };
          t3.PLATFORMS_MAP = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" };
          t3.OS_MAP = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" };
          t3.ENGINE_MAP = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
        }, 90: function(e3, t3, r3) {
          "use strict";
          t3.__esModule = true, t3.default = void 0;
          var n3, i3 = (n3 = r3(91)) && n3.__esModule ? n3 : { default: n3 }, s3 = r3(18);
          function a3(e4, t4) {
            for (var r4 = 0; r4 < t4.length; r4++) {
              var n4 = t4[r4];
              n4.enumerable = n4.enumerable || false, n4.configurable = true, "value" in n4 && (n4.writable = true), Object.defineProperty(e4, n4.key, n4);
            }
          }
          var o3 = function() {
            function e4() {
            }
            var t4, r4, n4;
            return e4.getParser = function(e5, t5) {
              if (void 0 === t5 && (t5 = false), "string" != typeof e5) throw new Error("UserAgent should be a string");
              return new i3.default(e5, t5);
            }, e4.parse = function(e5) {
              return new i3.default(e5).getResult();
            }, t4 = e4, n4 = [{ key: "BROWSER_MAP", get: function() {
              return s3.BROWSER_MAP;
            } }, { key: "ENGINE_MAP", get: function() {
              return s3.ENGINE_MAP;
            } }, { key: "OS_MAP", get: function() {
              return s3.OS_MAP;
            } }, { key: "PLATFORMS_MAP", get: function() {
              return s3.PLATFORMS_MAP;
            } }], (r4 = null) && a3(t4.prototype, r4), n4 && a3(t4, n4), e4;
          }();
          t3.default = o3, e3.exports = t3.default;
        }, 91: function(e3, t3, r3) {
          "use strict";
          t3.__esModule = true, t3.default = void 0;
          var n3 = u3(r3(92)), i3 = u3(r3(93)), s3 = u3(r3(94)), a3 = u3(r3(95)), o3 = u3(r3(17));
          function u3(e4) {
            return e4 && e4.__esModule ? e4 : { default: e4 };
          }
          var d3 = function() {
            function e4(e5, t5) {
              if (void 0 === t5 && (t5 = false), null == e5 || "" === e5) throw new Error("UserAgent parameter can't be empty");
              this._ua = e5, this.parsedResult = {}, true !== t5 && this.parse();
            }
            var t4 = e4.prototype;
            return t4.getUA = function() {
              return this._ua;
            }, t4.test = function(e5) {
              return e5.test(this._ua);
            }, t4.parseBrowser = function() {
              var e5 = this;
              this.parsedResult.browser = {};
              var t5 = o3.default.find(n3.default, function(t6) {
                if ("function" == typeof t6.test) return t6.test(e5);
                if (t6.test instanceof Array) return t6.test.some(function(t7) {
                  return e5.test(t7);
                });
                throw new Error("Browser's test function is not valid");
              });
              return t5 && (this.parsedResult.browser = t5.describe(this.getUA())), this.parsedResult.browser;
            }, t4.getBrowser = function() {
              return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
            }, t4.getBrowserName = function(e5) {
              return e5 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
            }, t4.getBrowserVersion = function() {
              return this.getBrowser().version;
            }, t4.getOS = function() {
              return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
            }, t4.parseOS = function() {
              var e5 = this;
              this.parsedResult.os = {};
              var t5 = o3.default.find(i3.default, function(t6) {
                if ("function" == typeof t6.test) return t6.test(e5);
                if (t6.test instanceof Array) return t6.test.some(function(t7) {
                  return e5.test(t7);
                });
                throw new Error("Browser's test function is not valid");
              });
              return t5 && (this.parsedResult.os = t5.describe(this.getUA())), this.parsedResult.os;
            }, t4.getOSName = function(e5) {
              var t5 = this.getOS().name;
              return e5 ? String(t5).toLowerCase() || "" : t5 || "";
            }, t4.getOSVersion = function() {
              return this.getOS().version;
            }, t4.getPlatform = function() {
              return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
            }, t4.getPlatformType = function(e5) {
              void 0 === e5 && (e5 = false);
              var t5 = this.getPlatform().type;
              return e5 ? String(t5).toLowerCase() || "" : t5 || "";
            }, t4.parsePlatform = function() {
              var e5 = this;
              this.parsedResult.platform = {};
              var t5 = o3.default.find(s3.default, function(t6) {
                if ("function" == typeof t6.test) return t6.test(e5);
                if (t6.test instanceof Array) return t6.test.some(function(t7) {
                  return e5.test(t7);
                });
                throw new Error("Browser's test function is not valid");
              });
              return t5 && (this.parsedResult.platform = t5.describe(this.getUA())), this.parsedResult.platform;
            }, t4.getEngine = function() {
              return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
            }, t4.getEngineName = function(e5) {
              return e5 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
            }, t4.parseEngine = function() {
              var e5 = this;
              this.parsedResult.engine = {};
              var t5 = o3.default.find(a3.default, function(t6) {
                if ("function" == typeof t6.test) return t6.test(e5);
                if (t6.test instanceof Array) return t6.test.some(function(t7) {
                  return e5.test(t7);
                });
                throw new Error("Browser's test function is not valid");
              });
              return t5 && (this.parsedResult.engine = t5.describe(this.getUA())), this.parsedResult.engine;
            }, t4.parse = function() {
              return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
            }, t4.getResult = function() {
              return o3.default.assign({}, this.parsedResult);
            }, t4.satisfies = function(e5) {
              var t5 = this, r4 = {}, n4 = 0, i4 = {}, s4 = 0;
              if (Object.keys(e5).forEach(function(t6) {
                var a5 = e5[t6];
                "string" == typeof a5 ? (i4[t6] = a5, s4 += 1) : "object" == typeof a5 && (r4[t6] = a5, n4 += 1);
              }), n4 > 0) {
                var a4 = Object.keys(r4), u4 = o3.default.find(a4, function(e6) {
                  return t5.isOS(e6);
                });
                if (u4) {
                  var d4 = this.satisfies(r4[u4]);
                  if (void 0 !== d4) return d4;
                }
                var c3 = o3.default.find(a4, function(e6) {
                  return t5.isPlatform(e6);
                });
                if (c3) {
                  var f3 = this.satisfies(r4[c3]);
                  if (void 0 !== f3) return f3;
                }
              }
              if (s4 > 0) {
                var l3 = Object.keys(i4), h3 = o3.default.find(l3, function(e6) {
                  return t5.isBrowser(e6, true);
                });
                if (void 0 !== h3) return this.compareVersion(i4[h3]);
              }
            }, t4.isBrowser = function(e5, t5) {
              void 0 === t5 && (t5 = false);
              var r4 = this.getBrowserName().toLowerCase(), n4 = e5.toLowerCase(), i4 = o3.default.getBrowserTypeByAlias(n4);
              return t5 && i4 && (n4 = i4.toLowerCase()), n4 === r4;
            }, t4.compareVersion = function(e5) {
              var t5 = [0], r4 = e5, n4 = false, i4 = this.getBrowserVersion();
              if ("string" == typeof i4) return ">" === e5[0] || "<" === e5[0] ? (r4 = e5.substr(1), "=" === e5[1] ? (n4 = true, r4 = e5.substr(2)) : t5 = [], ">" === e5[0] ? t5.push(1) : t5.push(-1)) : "=" === e5[0] ? r4 = e5.substr(1) : "~" === e5[0] && (n4 = true, r4 = e5.substr(1)), t5.indexOf(o3.default.compareVersions(i4, r4, n4)) > -1;
            }, t4.isOS = function(e5) {
              return this.getOSName(true) === String(e5).toLowerCase();
            }, t4.isPlatform = function(e5) {
              return this.getPlatformType(true) === String(e5).toLowerCase();
            }, t4.isEngine = function(e5) {
              return this.getEngineName(true) === String(e5).toLowerCase();
            }, t4.is = function(e5, t5) {
              return void 0 === t5 && (t5 = false), this.isBrowser(e5, t5) || this.isOS(e5) || this.isPlatform(e5);
            }, t4.some = function(e5) {
              var t5 = this;
              return void 0 === e5 && (e5 = []), e5.some(function(e6) {
                return t5.is(e6);
              });
            }, e4;
          }();
          t3.default = d3, e3.exports = t3.default;
        }, 92: function(e3, t3, r3) {
          "use strict";
          t3.__esModule = true, t3.default = void 0;
          var n3, i3 = (n3 = r3(17)) && n3.__esModule ? n3 : { default: n3 };
          var s3 = /version\/(\d+(\.?_?\d+)+)/i, a3 = [{ test: [/googlebot/i], describe: function(e4) {
            var t4 = { name: "Googlebot" }, r4 = i3.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e4) || i3.default.getFirstMatch(s3, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/opera/i], describe: function(e4) {
            var t4 = { name: "Opera" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/opr\/|opios/i], describe: function(e4) {
            var t4 = { name: "Opera" }, r4 = i3.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e4) || i3.default.getFirstMatch(s3, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/SamsungBrowser/i], describe: function(e4) {
            var t4 = { name: "Samsung Internet for Android" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/Whale/i], describe: function(e4) {
            var t4 = { name: "NAVER Whale Browser" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/MZBrowser/i], describe: function(e4) {
            var t4 = { name: "MZ Browser" }, r4 = i3.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e4) || i3.default.getFirstMatch(s3, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/focus/i], describe: function(e4) {
            var t4 = { name: "Focus" }, r4 = i3.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e4) || i3.default.getFirstMatch(s3, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/swing/i], describe: function(e4) {
            var t4 = { name: "Swing" }, r4 = i3.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e4) || i3.default.getFirstMatch(s3, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/coast/i], describe: function(e4) {
            var t4 = { name: "Opera Coast" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe: function(e4) {
            var t4 = { name: "Opera Touch" }, r4 = i3.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e4) || i3.default.getFirstMatch(s3, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/yabrowser/i], describe: function(e4) {
            var t4 = { name: "Yandex Browser" }, r4 = i3.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e4) || i3.default.getFirstMatch(s3, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/ucbrowser/i], describe: function(e4) {
            var t4 = { name: "UC Browser" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/Maxthon|mxios/i], describe: function(e4) {
            var t4 = { name: "Maxthon" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/epiphany/i], describe: function(e4) {
            var t4 = { name: "Epiphany" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/puffin/i], describe: function(e4) {
            var t4 = { name: "Puffin" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/sleipnir/i], describe: function(e4) {
            var t4 = { name: "Sleipnir" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/k-meleon/i], describe: function(e4) {
            var t4 = { name: "K-Meleon" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/micromessenger/i], describe: function(e4) {
            var t4 = { name: "WeChat" }, r4 = i3.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e4) || i3.default.getFirstMatch(s3, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/qqbrowser/i], describe: function(e4) {
            var t4 = { name: /qqbrowserlite/i.test(e4) ? "QQ Browser Lite" : "QQ Browser" }, r4 = i3.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e4) || i3.default.getFirstMatch(s3, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/msie|trident/i], describe: function(e4) {
            var t4 = { name: "Internet Explorer" }, r4 = i3.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/\sedg\//i], describe: function(e4) {
            var t4 = { name: "Microsoft Edge" }, r4 = i3.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/edg([ea]|ios)/i], describe: function(e4) {
            var t4 = { name: "Microsoft Edge" }, r4 = i3.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/vivaldi/i], describe: function(e4) {
            var t4 = { name: "Vivaldi" }, r4 = i3.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/seamonkey/i], describe: function(e4) {
            var t4 = { name: "SeaMonkey" }, r4 = i3.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/sailfish/i], describe: function(e4) {
            var t4 = { name: "Sailfish" }, r4 = i3.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/silk/i], describe: function(e4) {
            var t4 = { name: "Amazon Silk" }, r4 = i3.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/phantom/i], describe: function(e4) {
            var t4 = { name: "PhantomJS" }, r4 = i3.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/slimerjs/i], describe: function(e4) {
            var t4 = { name: "SlimerJS" }, r4 = i3.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e4) {
            var t4 = { name: "BlackBerry" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/(web|hpw)[o0]s/i], describe: function(e4) {
            var t4 = { name: "WebOS Browser" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/bada/i], describe: function(e4) {
            var t4 = { name: "Bada" }, r4 = i3.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/tizen/i], describe: function(e4) {
            var t4 = { name: "Tizen" }, r4 = i3.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e4) || i3.default.getFirstMatch(s3, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/qupzilla/i], describe: function(e4) {
            var t4 = { name: "QupZilla" }, r4 = i3.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e4) || i3.default.getFirstMatch(s3, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/firefox|iceweasel|fxios/i], describe: function(e4) {
            var t4 = { name: "Firefox" }, r4 = i3.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/electron/i], describe: function(e4) {
            var t4 = { name: "Electron" }, r4 = i3.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/MiuiBrowser/i], describe: function(e4) {
            var t4 = { name: "Miui" }, r4 = i3.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/chromium/i], describe: function(e4) {
            var t4 = { name: "Chromium" }, r4 = i3.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e4) || i3.default.getFirstMatch(s3, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/chrome|crios|crmo/i], describe: function(e4) {
            var t4 = { name: "Chrome" }, r4 = i3.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/GSA/i], describe: function(e4) {
            var t4 = { name: "Google Search" }, r4 = i3.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: function(e4) {
            var t4 = !e4.test(/like android/i), r4 = e4.test(/android/i);
            return t4 && r4;
          }, describe: function(e4) {
            var t4 = { name: "Android Browser" }, r4 = i3.default.getFirstMatch(s3, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/playstation 4/i], describe: function(e4) {
            var t4 = { name: "PlayStation 4" }, r4 = i3.default.getFirstMatch(s3, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/safari|applewebkit/i], describe: function(e4) {
            var t4 = { name: "Safari" }, r4 = i3.default.getFirstMatch(s3, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/.*/i], describe: function(e4) {
            var t4 = -1 !== e4.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
            return { name: i3.default.getFirstMatch(t4, e4), version: i3.default.getSecondMatch(t4, e4) };
          } }];
          t3.default = a3, e3.exports = t3.default;
        }, 93: function(e3, t3, r3) {
          "use strict";
          t3.__esModule = true, t3.default = void 0;
          var n3, i3 = (n3 = r3(17)) && n3.__esModule ? n3 : { default: n3 }, s3 = r3(18);
          var a3 = [{ test: [/Roku\/DVP/], describe: function(e4) {
            var t4 = i3.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e4);
            return { name: s3.OS_MAP.Roku, version: t4 };
          } }, { test: [/windows phone/i], describe: function(e4) {
            var t4 = i3.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e4);
            return { name: s3.OS_MAP.WindowsPhone, version: t4 };
          } }, { test: [/windows /i], describe: function(e4) {
            var t4 = i3.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e4), r4 = i3.default.getWindowsVersionName(t4);
            return { name: s3.OS_MAP.Windows, version: t4, versionName: r4 };
          } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function(e4) {
            var t4 = { name: s3.OS_MAP.iOS }, r4 = i3.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/macintosh/i], describe: function(e4) {
            var t4 = i3.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e4).replace(/[_\s]/g, "."), r4 = i3.default.getMacOSVersionName(t4), n4 = { name: s3.OS_MAP.MacOS, version: t4 };
            return r4 && (n4.versionName = r4), n4;
          } }, { test: [/(ipod|iphone|ipad)/i], describe: function(e4) {
            var t4 = i3.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e4).replace(/[_\s]/g, ".");
            return { name: s3.OS_MAP.iOS, version: t4 };
          } }, { test: function(e4) {
            var t4 = !e4.test(/like android/i), r4 = e4.test(/android/i);
            return t4 && r4;
          }, describe: function(e4) {
            var t4 = i3.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e4), r4 = i3.default.getAndroidVersionName(t4), n4 = { name: s3.OS_MAP.Android, version: t4 };
            return r4 && (n4.versionName = r4), n4;
          } }, { test: [/(web|hpw)[o0]s/i], describe: function(e4) {
            var t4 = i3.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e4), r4 = { name: s3.OS_MAP.WebOS };
            return t4 && t4.length && (r4.version = t4), r4;
          } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e4) {
            var t4 = i3.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e4) || i3.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e4) || i3.default.getFirstMatch(/\bbb(\d+)/i, e4);
            return { name: s3.OS_MAP.BlackBerry, version: t4 };
          } }, { test: [/bada/i], describe: function(e4) {
            var t4 = i3.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e4);
            return { name: s3.OS_MAP.Bada, version: t4 };
          } }, { test: [/tizen/i], describe: function(e4) {
            var t4 = i3.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e4);
            return { name: s3.OS_MAP.Tizen, version: t4 };
          } }, { test: [/linux/i], describe: function() {
            return { name: s3.OS_MAP.Linux };
          } }, { test: [/CrOS/], describe: function() {
            return { name: s3.OS_MAP.ChromeOS };
          } }, { test: [/PlayStation 4/], describe: function(e4) {
            var t4 = i3.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e4);
            return { name: s3.OS_MAP.PlayStation4, version: t4 };
          } }];
          t3.default = a3, e3.exports = t3.default;
        }, 94: function(e3, t3, r3) {
          "use strict";
          t3.__esModule = true, t3.default = void 0;
          var n3, i3 = (n3 = r3(17)) && n3.__esModule ? n3 : { default: n3 }, s3 = r3(18);
          var a3 = [{ test: [/googlebot/i], describe: function() {
            return { type: "bot", vendor: "Google" };
          } }, { test: [/huawei/i], describe: function(e4) {
            var t4 = i3.default.getFirstMatch(/(can-l01)/i, e4) && "Nova", r4 = { type: s3.PLATFORMS_MAP.mobile, vendor: "Huawei" };
            return t4 && (r4.model = t4), r4;
          } }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: function() {
            return { type: s3.PLATFORMS_MAP.tablet, vendor: "Nexus" };
          } }, { test: [/ipad/i], describe: function() {
            return { type: s3.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
          } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function() {
            return { type: s3.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
          } }, { test: [/kftt build/i], describe: function() {
            return { type: s3.PLATFORMS_MAP.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
          } }, { test: [/silk/i], describe: function() {
            return { type: s3.PLATFORMS_MAP.tablet, vendor: "Amazon" };
          } }, { test: [/tablet(?! pc)/i], describe: function() {
            return { type: s3.PLATFORMS_MAP.tablet };
          } }, { test: function(e4) {
            var t4 = e4.test(/ipod|iphone/i), r4 = e4.test(/like (ipod|iphone)/i);
            return t4 && !r4;
          }, describe: function(e4) {
            var t4 = i3.default.getFirstMatch(/(ipod|iphone)/i, e4);
            return { type: s3.PLATFORMS_MAP.mobile, vendor: "Apple", model: t4 };
          } }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: function() {
            return { type: s3.PLATFORMS_MAP.mobile, vendor: "Nexus" };
          } }, { test: [/[^-]mobi/i], describe: function() {
            return { type: s3.PLATFORMS_MAP.mobile };
          } }, { test: function(e4) {
            return "blackberry" === e4.getBrowserName(true);
          }, describe: function() {
            return { type: s3.PLATFORMS_MAP.mobile, vendor: "BlackBerry" };
          } }, { test: function(e4) {
            return "bada" === e4.getBrowserName(true);
          }, describe: function() {
            return { type: s3.PLATFORMS_MAP.mobile };
          } }, { test: function(e4) {
            return "windows phone" === e4.getBrowserName();
          }, describe: function() {
            return { type: s3.PLATFORMS_MAP.mobile, vendor: "Microsoft" };
          } }, { test: function(e4) {
            var t4 = Number(String(e4.getOSVersion()).split(".")[0]);
            return "android" === e4.getOSName(true) && t4 >= 3;
          }, describe: function() {
            return { type: s3.PLATFORMS_MAP.tablet };
          } }, { test: function(e4) {
            return "android" === e4.getOSName(true);
          }, describe: function() {
            return { type: s3.PLATFORMS_MAP.mobile };
          } }, { test: function(e4) {
            return "macos" === e4.getOSName(true);
          }, describe: function() {
            return { type: s3.PLATFORMS_MAP.desktop, vendor: "Apple" };
          } }, { test: function(e4) {
            return "windows" === e4.getOSName(true);
          }, describe: function() {
            return { type: s3.PLATFORMS_MAP.desktop };
          } }, { test: function(e4) {
            return "linux" === e4.getOSName(true);
          }, describe: function() {
            return { type: s3.PLATFORMS_MAP.desktop };
          } }, { test: function(e4) {
            return "playstation 4" === e4.getOSName(true);
          }, describe: function() {
            return { type: s3.PLATFORMS_MAP.tv };
          } }, { test: function(e4) {
            return "roku" === e4.getOSName(true);
          }, describe: function() {
            return { type: s3.PLATFORMS_MAP.tv };
          } }];
          t3.default = a3, e3.exports = t3.default;
        }, 95: function(e3, t3, r3) {
          "use strict";
          t3.__esModule = true, t3.default = void 0;
          var n3, i3 = (n3 = r3(17)) && n3.__esModule ? n3 : { default: n3 }, s3 = r3(18);
          var a3 = [{ test: function(e4) {
            return "microsoft edge" === e4.getBrowserName(true);
          }, describe: function(e4) {
            if (/\sedg\//i.test(e4)) return { name: s3.ENGINE_MAP.Blink };
            var t4 = i3.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e4);
            return { name: s3.ENGINE_MAP.EdgeHTML, version: t4 };
          } }, { test: [/trident/i], describe: function(e4) {
            var t4 = { name: s3.ENGINE_MAP.Trident }, r4 = i3.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: function(e4) {
            return e4.test(/presto/i);
          }, describe: function(e4) {
            var t4 = { name: s3.ENGINE_MAP.Presto }, r4 = i3.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: function(e4) {
            var t4 = e4.test(/gecko/i), r4 = e4.test(/like gecko/i);
            return t4 && !r4;
          }, describe: function(e4) {
            var t4 = { name: s3.ENGINE_MAP.Gecko }, r4 = i3.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }, { test: [/(apple)?webkit\/537\.36/i], describe: function() {
            return { name: s3.ENGINE_MAP.Blink };
          } }, { test: [/(apple)?webkit/i], describe: function(e4) {
            var t4 = { name: s3.ENGINE_MAP.WebKit }, r4 = i3.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e4);
            return r4 && (t4.version = r4), t4;
          } }];
          t3.default = a3, e3.exports = t3.default;
        } });
      });
    }
  });

  // node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js
  var import_bowser, defaultUserAgent;
  var init_dist_es33 = __esm({
    "node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js"() {
      import_bowser = __toESM(require_es5());
      defaultUserAgent = ({ serviceId, clientVersion }) => async () => {
        const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent ? import_bowser.default.parse(window.navigator.userAgent) : void 0;
        const sections = [
          ["aws-sdk-js", clientVersion],
          ["ua", "2.0"],
          [`os/${parsedUA?.os?.name || "other"}`, parsedUA?.os?.version],
          ["lang/js"],
          ["md/browser", `${parsedUA?.browser?.name ?? "unknown"}_${parsedUA?.browser?.version ?? "unknown"}`]
        ];
        if (serviceId) {
          sections.push([`api/${serviceId}`, clientVersion]);
        }
        return sections;
      };
    }
  });

  // node_modules/@smithy/invalid-dependency/dist-es/invalidFunction.js
  var init_invalidFunction = __esm({
    "node_modules/@smithy/invalid-dependency/dist-es/invalidFunction.js"() {
    }
  });

  // node_modules/@smithy/invalid-dependency/dist-es/invalidProvider.js
  var invalidProvider;
  var init_invalidProvider = __esm({
    "node_modules/@smithy/invalid-dependency/dist-es/invalidProvider.js"() {
      invalidProvider = (message) => () => Promise.reject(message);
    }
  });

  // node_modules/@smithy/invalid-dependency/dist-es/index.js
  var init_dist_es34 = __esm({
    "node_modules/@smithy/invalid-dependency/dist-es/index.js"() {
      init_invalidFunction();
      init_invalidProvider();
    }
  });

  // node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js
  var TEXT_ENCODER, calculateBodyLength;
  var init_calculateBodyLength = __esm({
    "node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js"() {
      TEXT_ENCODER = typeof TextEncoder == "function" ? new TextEncoder() : null;
      calculateBodyLength = (body) => {
        if (typeof body === "string") {
          if (TEXT_ENCODER) {
            return TEXT_ENCODER.encode(body).byteLength;
          }
          let len = body.length;
          for (let i3 = len - 1; i3 >= 0; i3--) {
            const code = body.charCodeAt(i3);
            if (code > 127 && code <= 2047)
              len++;
            else if (code > 2047 && code <= 65535)
              len += 2;
            if (code >= 56320 && code <= 57343)
              i3--;
          }
          return len;
        } else if (typeof body.byteLength === "number") {
          return body.byteLength;
        } else if (typeof body.size === "number") {
          return body.size;
        }
        throw new Error(`Body Length computation failed for ${body}`);
      };
    }
  });

  // node_modules/@smithy/util-body-length-browser/dist-es/index.js
  var init_dist_es35 = __esm({
    "node_modules/@smithy/util-body-length-browser/dist-es/index.js"() {
      init_calculateBodyLength();
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/ruleset.js
  var s, t, u, v, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, _data, ruleSet;
  var init_ruleset = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/ruleset.js"() {
      s = "required";
      t = "fn";
      u = "argv";
      v = "ref";
      a = true;
      b = "isSet";
      c = "booleanEquals";
      d = "error";
      e = "endpoint";
      f = "tree";
      g = "PartitionResult";
      h = { [s]: false, "type": "String" };
      i = { [s]: true, "default": false, "type": "Boolean" };
      j = { [v]: "Endpoint" };
      k = { [t]: c, [u]: [{ [v]: "UseFIPS" }, true] };
      l = { [t]: c, [u]: [{ [v]: "UseDualStack" }, true] };
      m = {};
      n = { [t]: "getAttr", [u]: [{ [v]: g }, "supportsFIPS"] };
      o = { [t]: c, [u]: [true, { [t]: "getAttr", [u]: [{ [v]: g }, "supportsDualStack"] }] };
      p = [k];
      q = [l];
      r = [{ [v]: "Region" }];
      _data = { version: "1.0", parameters: { Region: h, UseDualStack: i, UseFIPS: i, Endpoint: h }, rules: [{ conditions: [{ [t]: b, [u]: [j] }], rules: [{ conditions: p, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: q, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: j, properties: m, headers: m }, type: e }], type: f }, { conditions: [{ [t]: b, [u]: r }], rules: [{ conditions: [{ [t]: "aws.partition", [u]: r, assign: g }], rules: [{ conditions: [k, l], rules: [{ conditions: [{ [t]: c, [u]: [a, n] }, o], rules: [{ endpoint: { url: "https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: m, headers: m }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: p, rules: [{ conditions: [{ [t]: c, [u]: [n, a] }], rules: [{ endpoint: { url: "https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}", properties: m, headers: m }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: q, rules: [{ conditions: [o], rules: [{ endpoint: { url: "https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: m, headers: m }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}", properties: m, headers: m }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
      ruleSet = _data;
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/endpointResolver.js
  var defaultEndpointResolver;
  var init_endpointResolver = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/endpointResolver.js"() {
      init_dist_es6();
      init_ruleset();
      defaultEndpointResolver = (endpointParams, context = {}) => {
        return resolveEndpoint(ruleSet, {
          endpointParams,
          logger: context.logger
        });
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeConfig.shared.js
  var getRuntimeConfig;
  var init_runtimeConfig_shared = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeConfig.shared.js"() {
      init_dist_es32();
      init_dist_es28();
      init_dist_es26();
      init_dist_es13();
      init_dist_es20();
      init_dist_es19();
      init_httpAuthSchemeProvider();
      init_endpointResolver();
      getRuntimeConfig = (config) => {
        return {
          apiVersion: "2014-06-30",
          base64Decoder: config?.base64Decoder ?? fromBase64,
          base64Encoder: config?.base64Encoder ?? toBase64,
          disableHostPrefix: config?.disableHostPrefix ?? false,
          endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
          extensions: config?.extensions ?? [],
          httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultCognitoIdentityHttpAuthSchemeProvider,
          httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
              schemeId: "aws.auth#sigv4",
              identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
              signer: new AwsSdkSigV4Signer()
            },
            {
              schemeId: "smithy.api#noAuth",
              identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
              signer: new NoAuthSigner()
            }
          ],
          logger: config?.logger ?? new NoOpLogger(),
          serviceId: config?.serviceId ?? "Cognito Identity",
          urlParser: config?.urlParser ?? parseUrl,
          utf8Decoder: config?.utf8Decoder ?? fromUtf8,
          utf8Encoder: config?.utf8Encoder ?? toUtf8
        };
      };
    }
  });

  // node_modules/@smithy/property-provider/dist-es/ProviderError.js
  var ProviderError;
  var init_ProviderError = __esm({
    "node_modules/@smithy/property-provider/dist-es/ProviderError.js"() {
      ProviderError = class _ProviderError extends Error {
        constructor(message, tryNextLink = true) {
          super(message);
          this.tryNextLink = tryNextLink;
          this.name = "ProviderError";
          Object.setPrototypeOf(this, _ProviderError.prototype);
        }
        static from(error, tryNextLink = true) {
          return Object.assign(new this(error.message, tryNextLink), error);
        }
      };
    }
  });

  // node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js
  var CredentialsProviderError;
  var init_CredentialsProviderError = __esm({
    "node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js"() {
      init_ProviderError();
      CredentialsProviderError = class _CredentialsProviderError extends ProviderError {
        constructor(message, tryNextLink = true) {
          super(message, tryNextLink);
          this.tryNextLink = tryNextLink;
          this.name = "CredentialsProviderError";
          Object.setPrototypeOf(this, _CredentialsProviderError.prototype);
        }
      };
    }
  });

  // node_modules/@smithy/property-provider/dist-es/TokenProviderError.js
  var init_TokenProviderError = __esm({
    "node_modules/@smithy/property-provider/dist-es/TokenProviderError.js"() {
      init_ProviderError();
    }
  });

  // node_modules/@smithy/property-provider/dist-es/chain.js
  var init_chain = __esm({
    "node_modules/@smithy/property-provider/dist-es/chain.js"() {
      init_ProviderError();
    }
  });

  // node_modules/@smithy/property-provider/dist-es/fromStatic.js
  var init_fromStatic = __esm({
    "node_modules/@smithy/property-provider/dist-es/fromStatic.js"() {
    }
  });

  // node_modules/@smithy/property-provider/dist-es/memoize.js
  var memoize;
  var init_memoize = __esm({
    "node_modules/@smithy/property-provider/dist-es/memoize.js"() {
      memoize = (provider, isExpired, requiresRefresh) => {
        let resolved;
        let pending;
        let hasResult;
        let isConstant = false;
        const coalesceProvider = async () => {
          if (!pending) {
            pending = provider();
          }
          try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
          } finally {
            pending = void 0;
          }
          return resolved;
        };
        if (isExpired === void 0) {
          return async (options) => {
            if (!hasResult || options?.forceRefresh) {
              resolved = await coalesceProvider();
            }
            return resolved;
          };
        }
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider();
          }
          if (isConstant) {
            return resolved;
          }
          if (requiresRefresh && !requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
          }
          if (isExpired(resolved)) {
            await coalesceProvider();
            return resolved;
          }
          return resolved;
        };
      };
    }
  });

  // node_modules/@smithy/property-provider/dist-es/index.js
  var init_dist_es36 = __esm({
    "node_modules/@smithy/property-provider/dist-es/index.js"() {
      init_CredentialsProviderError();
      init_ProviderError();
      init_TokenProviderError();
      init_chain();
      init_fromStatic();
      init_memoize();
    }
  });

  // node_modules/@smithy/util-defaults-mode-browser/dist-es/constants.js
  var DEFAULTS_MODE_OPTIONS;
  var init_constants6 = __esm({
    "node_modules/@smithy/util-defaults-mode-browser/dist-es/constants.js"() {
      DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
    }
  });

  // node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js
  var import_bowser2, resolveDefaultsModeConfig, isMobileBrowser;
  var init_resolveDefaultsModeConfig = __esm({
    "node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js"() {
      init_dist_es36();
      import_bowser2 = __toESM(require_es5());
      init_constants6();
      resolveDefaultsModeConfig = ({ defaultsMode } = {}) => memoize(async () => {
        const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
        switch (mode?.toLowerCase()) {
          case "auto":
            return Promise.resolve(isMobileBrowser() ? "mobile" : "standard");
          case "mobile":
          case "in-region":
          case "cross-region":
          case "standard":
          case "legacy":
            return Promise.resolve(mode?.toLocaleLowerCase());
          case void 0:
            return Promise.resolve("legacy");
          default:
            throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
        }
      });
      isMobileBrowser = () => {
        const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent ? import_bowser2.default.parse(window.navigator.userAgent) : void 0;
        const platform = parsedUA?.platform?.type;
        return platform === "tablet" || platform === "mobile";
      };
    }
  });

  // node_modules/@smithy/util-defaults-mode-browser/dist-es/index.js
  var init_dist_es37 = __esm({
    "node_modules/@smithy/util-defaults-mode-browser/dist-es/index.js"() {
      init_resolveDefaultsModeConfig();
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeConfig.browser.js
  var import_sha256_browser, getRuntimeConfig2;
  var init_runtimeConfig_browser = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeConfig.browser.js"() {
      init_package();
      import_sha256_browser = __toESM(require_build5());
      init_dist_es33();
      init_dist_es11();
      init_dist_es23();
      init_dist_es34();
      init_dist_es35();
      init_dist_es17();
      init_runtimeConfig_shared();
      init_dist_es26();
      init_dist_es37();
      getRuntimeConfig2 = (config) => {
        const defaultsMode = resolveDefaultsModeConfig(config);
        const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
        const clientSharedValues = getRuntimeConfig(config);
        return {
          ...clientSharedValues,
          ...config,
          runtime: "browser",
          defaultsMode,
          bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
          credentialDefaultProvider: config?.credentialDefaultProvider ?? ((_) => () => Promise.reject(new Error("Credential is missing"))),
          defaultUserAgentProvider: config?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
          maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
          region: config?.region ?? invalidProvider("Region is missing"),
          requestHandler: FetchHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
          retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
          sha256: config?.sha256 ?? import_sha256_browser.Sha256,
          streamCollector: config?.streamCollector ?? streamCollector,
          useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
          useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))
        };
      };
    }
  });

  // node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js
  var getAwsRegionExtensionConfiguration, resolveAwsRegionExtensionConfiguration;
  var init_extensions4 = __esm({
    "node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js"() {
      getAwsRegionExtensionConfiguration = (runtimeConfig) => {
        let runtimeConfigRegion = async () => {
          if (runtimeConfig.region === void 0) {
            throw new Error("Region is missing from runtimeConfig");
          }
          const region = runtimeConfig.region;
          if (typeof region === "string") {
            return region;
          }
          return region();
        };
        return {
          setRegion(region) {
            runtimeConfigRegion = region;
          },
          region() {
            return runtimeConfigRegion;
          }
        };
      };
      resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
        return {
          region: awsRegionExtensionConfiguration.region()
        };
      };
    }
  });

  // node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js
  var init_config4 = __esm({
    "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js"() {
    }
  });

  // node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js
  var init_isFipsRegion2 = __esm({
    "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js"() {
    }
  });

  // node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/getRealRegion.js
  var init_getRealRegion2 = __esm({
    "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/getRealRegion.js"() {
      init_isFipsRegion2();
    }
  });

  // node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/resolveRegionConfig.js
  var init_resolveRegionConfig2 = __esm({
    "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/resolveRegionConfig.js"() {
      init_getRealRegion2();
      init_isFipsRegion2();
    }
  });

  // node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js
  var init_regionConfig2 = __esm({
    "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js"() {
      init_config4();
      init_resolveRegionConfig2();
    }
  });

  // node_modules/@aws-sdk/region-config-resolver/dist-es/index.js
  var init_dist_es38 = __esm({
    "node_modules/@aws-sdk/region-config-resolver/dist-es/index.js"() {
      init_extensions4();
      init_regionConfig2();
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/auth/httpAuthExtensionConfiguration.js
  var getHttpAuthExtensionConfiguration, resolveHttpAuthRuntimeConfig;
  var init_httpAuthExtensionConfiguration = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/auth/httpAuthExtensionConfiguration.js"() {
      getHttpAuthExtensionConfiguration = (runtimeConfig) => {
        const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
        let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
        let _credentials = runtimeConfig.credentials;
        return {
          setHttpAuthScheme(httpAuthScheme) {
            const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
            if (index === -1) {
              _httpAuthSchemes.push(httpAuthScheme);
            } else {
              _httpAuthSchemes.splice(index, 1, httpAuthScheme);
            }
          },
          httpAuthSchemes() {
            return _httpAuthSchemes;
          },
          setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
            _httpAuthSchemeProvider = httpAuthSchemeProvider;
          },
          httpAuthSchemeProvider() {
            return _httpAuthSchemeProvider;
          },
          setCredentials(credentials) {
            _credentials = credentials;
          },
          credentials() {
            return _credentials;
          }
        };
      };
      resolveHttpAuthRuntimeConfig = (config) => {
        return {
          httpAuthSchemes: config.httpAuthSchemes(),
          httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
          credentials: config.credentials()
        };
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeExtensions.js
  var asPartial, resolveRuntimeExtensions;
  var init_runtimeExtensions = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeExtensions.js"() {
      init_dist_es38();
      init_dist_es2();
      init_dist_es26();
      init_httpAuthExtensionConfiguration();
      asPartial = (t3) => t3;
      resolveRuntimeExtensions = (runtimeConfig, extensions) => {
        const extensionConfiguration = {
          ...asPartial(getAwsRegionExtensionConfiguration(runtimeConfig)),
          ...asPartial(getDefaultExtensionConfiguration(runtimeConfig)),
          ...asPartial(getHttpHandlerExtensionConfiguration(runtimeConfig)),
          ...asPartial(getHttpAuthExtensionConfiguration(runtimeConfig))
        };
        extensions.forEach((extension) => extension.configure(extensionConfiguration));
        return {
          ...runtimeConfig,
          ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
          ...resolveDefaultRuntimeConfig(extensionConfiguration),
          ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
          ...resolveHttpAuthRuntimeConfig(extensionConfiguration)
        };
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/CognitoIdentityClient.js
  var CognitoIdentityClient;
  var init_CognitoIdentityClient = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/CognitoIdentityClient.js"() {
      init_dist_es3();
      init_dist_es4();
      init_dist_es5();
      init_dist_es8();
      init_dist_es11();
      init_dist_es28();
      init_dist_es29();
      init_dist_es15();
      init_dist_es27();
      init_dist_es26();
      init_httpAuthSchemeProvider();
      init_EndpointParameters();
      init_runtimeConfig_browser();
      init_runtimeExtensions();
      CognitoIdentityClient = class extends Client {
        constructor(...[configuration]) {
          const _config_0 = getRuntimeConfig2(configuration || {});
          const _config_1 = resolveClientEndpointParameters(_config_0);
          const _config_2 = resolveRegionConfig(_config_1);
          const _config_3 = resolveEndpointConfig(_config_2);
          const _config_4 = resolveRetryConfig(_config_3);
          const _config_5 = resolveHostHeaderConfig(_config_4);
          const _config_6 = resolveUserAgentConfig(_config_5);
          const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
          const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
          super(_config_8);
          this.config = _config_8;
          this.middlewareStack.use(getRetryPlugin(this.config));
          this.middlewareStack.use(getContentLengthPlugin(this.config));
          this.middlewareStack.use(getHostHeaderPlugin(this.config));
          this.middlewareStack.use(getLoggerPlugin(this.config));
          this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
          this.middlewareStack.use(getUserAgentPlugin(this.config));
          this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
            identityProviderConfigProvider: this.getIdentityProviderConfigProvider()
          }));
          this.middlewareStack.use(getHttpSigningPlugin(this.config));
        }
        destroy() {
          super.destroy();
        }
        getDefaultHttpAuthSchemeParametersProvider() {
          return defaultCognitoIdentityHttpAuthSchemeParametersProvider;
        }
        getIdentityProviderConfigProvider() {
          return async (config) => new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials
          });
        }
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/models/CognitoIdentityServiceException.js
  var CognitoIdentityServiceException;
  var init_CognitoIdentityServiceException = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/models/CognitoIdentityServiceException.js"() {
      init_dist_es26();
      CognitoIdentityServiceException = class _CognitoIdentityServiceException extends ServiceException {
        constructor(options) {
          super(options);
          Object.setPrototypeOf(this, _CognitoIdentityServiceException.prototype);
        }
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/models/models_0.js
  var InternalErrorException, InvalidParameterException, LimitExceededException, NotAuthorizedException, ResourceConflictException, TooManyRequestsException, ResourceNotFoundException, ExternalServiceException, InvalidIdentityPoolConfigurationException, DeveloperUserAlreadyRegisteredException, ConcurrentModificationException;
  var init_models_0 = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/models/models_0.js"() {
      init_CognitoIdentityServiceException();
      InternalErrorException = class _InternalErrorException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "InternalErrorException",
            $fault: "server",
            ...opts
          });
          this.name = "InternalErrorException";
          this.$fault = "server";
          Object.setPrototypeOf(this, _InternalErrorException.prototype);
        }
      };
      InvalidParameterException = class _InvalidParameterException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "InvalidParameterException",
            $fault: "client",
            ...opts
          });
          this.name = "InvalidParameterException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _InvalidParameterException.prototype);
        }
      };
      LimitExceededException = class _LimitExceededException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts
          });
          this.name = "LimitExceededException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _LimitExceededException.prototype);
        }
      };
      NotAuthorizedException = class _NotAuthorizedException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "NotAuthorizedException",
            $fault: "client",
            ...opts
          });
          this.name = "NotAuthorizedException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _NotAuthorizedException.prototype);
        }
      };
      ResourceConflictException = class _ResourceConflictException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "ResourceConflictException",
            $fault: "client",
            ...opts
          });
          this.name = "ResourceConflictException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _ResourceConflictException.prototype);
        }
      };
      TooManyRequestsException = class _TooManyRequestsException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...opts
          });
          this.name = "TooManyRequestsException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _TooManyRequestsException.prototype);
        }
      };
      ResourceNotFoundException = class _ResourceNotFoundException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts
          });
          this.name = "ResourceNotFoundException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
        }
      };
      ExternalServiceException = class _ExternalServiceException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "ExternalServiceException",
            $fault: "client",
            ...opts
          });
          this.name = "ExternalServiceException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _ExternalServiceException.prototype);
        }
      };
      InvalidIdentityPoolConfigurationException = class _InvalidIdentityPoolConfigurationException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "InvalidIdentityPoolConfigurationException",
            $fault: "client",
            ...opts
          });
          this.name = "InvalidIdentityPoolConfigurationException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _InvalidIdentityPoolConfigurationException.prototype);
        }
      };
      DeveloperUserAlreadyRegisteredException = class _DeveloperUserAlreadyRegisteredException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "DeveloperUserAlreadyRegisteredException",
            $fault: "client",
            ...opts
          });
          this.name = "DeveloperUserAlreadyRegisteredException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _DeveloperUserAlreadyRegisteredException.prototype);
        }
      };
      ConcurrentModificationException = class _ConcurrentModificationException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "ConcurrentModificationException",
            $fault: "client",
            ...opts
          });
          this.name = "ConcurrentModificationException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _ConcurrentModificationException.prototype);
        }
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/protocols/Aws_json1_1.js
  function sharedHeaders(operation) {
    return {
      "content-type": "application/x-amz-json-1.1",
      "x-amz-target": `AWSCognitoIdentityService.${operation}`
    };
  }
  var se_CreateIdentityPoolCommand, se_DeleteIdentitiesCommand, se_DeleteIdentityPoolCommand, se_DescribeIdentityCommand, se_DescribeIdentityPoolCommand, se_GetCredentialsForIdentityCommand, se_GetIdCommand, se_GetIdentityPoolRolesCommand, se_GetOpenIdTokenCommand, se_GetOpenIdTokenForDeveloperIdentityCommand, se_GetPrincipalTagAttributeMapCommand, se_ListIdentitiesCommand, se_ListIdentityPoolsCommand, se_ListTagsForResourceCommand, se_LookupDeveloperIdentityCommand, se_MergeDeveloperIdentitiesCommand, se_SetIdentityPoolRolesCommand, se_SetPrincipalTagAttributeMapCommand, se_TagResourceCommand, se_UnlinkDeveloperIdentityCommand, se_UnlinkIdentityCommand, se_UntagResourceCommand, se_UpdateIdentityPoolCommand, de_CreateIdentityPoolCommand, de_DeleteIdentitiesCommand, de_DeleteIdentityPoolCommand, de_DescribeIdentityCommand, de_DescribeIdentityPoolCommand, de_GetCredentialsForIdentityCommand, de_GetIdCommand, de_GetIdentityPoolRolesCommand, de_GetOpenIdTokenCommand, de_GetOpenIdTokenForDeveloperIdentityCommand, de_GetPrincipalTagAttributeMapCommand, de_ListIdentitiesCommand, de_ListIdentityPoolsCommand, de_ListTagsForResourceCommand, de_LookupDeveloperIdentityCommand, de_MergeDeveloperIdentitiesCommand, de_SetIdentityPoolRolesCommand, de_SetPrincipalTagAttributeMapCommand, de_TagResourceCommand, de_UnlinkDeveloperIdentityCommand, de_UnlinkIdentityCommand, de_UntagResourceCommand, de_UpdateIdentityPoolCommand, de_CommandError, de_ConcurrentModificationExceptionRes, de_DeveloperUserAlreadyRegisteredExceptionRes, de_ExternalServiceExceptionRes, de_InternalErrorExceptionRes, de_InvalidIdentityPoolConfigurationExceptionRes, de_InvalidParameterExceptionRes, de_LimitExceededExceptionRes, de_NotAuthorizedExceptionRes, de_ResourceConflictExceptionRes, de_ResourceNotFoundExceptionRes, de_TooManyRequestsExceptionRes, de_Credentials, de_GetCredentialsForIdentityResponse, de_IdentitiesList, de_IdentityDescription, de_ListIdentitiesResponse, deserializeMetadata2, throwDefaultError2, buildHttpRpcRequest;
  var init_Aws_json1_1 = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/protocols/Aws_json1_1.js"() {
      init_dist_es32();
      init_dist_es2();
      init_dist_es26();
      init_CognitoIdentityServiceException();
      init_models_0();
      se_CreateIdentityPoolCommand = async (input, context) => {
        const headers = sharedHeaders("CreateIdentityPool");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_DeleteIdentitiesCommand = async (input, context) => {
        const headers = sharedHeaders("DeleteIdentities");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_DeleteIdentityPoolCommand = async (input, context) => {
        const headers = sharedHeaders("DeleteIdentityPool");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_DescribeIdentityCommand = async (input, context) => {
        const headers = sharedHeaders("DescribeIdentity");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_DescribeIdentityPoolCommand = async (input, context) => {
        const headers = sharedHeaders("DescribeIdentityPool");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_GetCredentialsForIdentityCommand = async (input, context) => {
        const headers = sharedHeaders("GetCredentialsForIdentity");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_GetIdCommand = async (input, context) => {
        const headers = sharedHeaders("GetId");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_GetIdentityPoolRolesCommand = async (input, context) => {
        const headers = sharedHeaders("GetIdentityPoolRoles");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_GetOpenIdTokenCommand = async (input, context) => {
        const headers = sharedHeaders("GetOpenIdToken");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_GetOpenIdTokenForDeveloperIdentityCommand = async (input, context) => {
        const headers = sharedHeaders("GetOpenIdTokenForDeveloperIdentity");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_GetPrincipalTagAttributeMapCommand = async (input, context) => {
        const headers = sharedHeaders("GetPrincipalTagAttributeMap");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_ListIdentitiesCommand = async (input, context) => {
        const headers = sharedHeaders("ListIdentities");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_ListIdentityPoolsCommand = async (input, context) => {
        const headers = sharedHeaders("ListIdentityPools");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_ListTagsForResourceCommand = async (input, context) => {
        const headers = sharedHeaders("ListTagsForResource");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_LookupDeveloperIdentityCommand = async (input, context) => {
        const headers = sharedHeaders("LookupDeveloperIdentity");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_MergeDeveloperIdentitiesCommand = async (input, context) => {
        const headers = sharedHeaders("MergeDeveloperIdentities");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_SetIdentityPoolRolesCommand = async (input, context) => {
        const headers = sharedHeaders("SetIdentityPoolRoles");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_SetPrincipalTagAttributeMapCommand = async (input, context) => {
        const headers = sharedHeaders("SetPrincipalTagAttributeMap");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_TagResourceCommand = async (input, context) => {
        const headers = sharedHeaders("TagResource");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_UnlinkDeveloperIdentityCommand = async (input, context) => {
        const headers = sharedHeaders("UnlinkDeveloperIdentity");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_UnlinkIdentityCommand = async (input, context) => {
        const headers = sharedHeaders("UnlinkIdentity");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_UntagResourceCommand = async (input, context) => {
        const headers = sharedHeaders("UntagResource");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_UpdateIdentityPoolCommand = async (input, context) => {
        const headers = sharedHeaders("UpdateIdentityPool");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      de_CreateIdentityPoolCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_DeleteIdentitiesCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_DeleteIdentityPoolCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        await collectBody(output.body, context);
        const response = {
          $metadata: deserializeMetadata2(output)
        };
        return response;
      };
      de_DescribeIdentityCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_IdentityDescription(data, context);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_DescribeIdentityPoolCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_GetCredentialsForIdentityCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_GetCredentialsForIdentityResponse(data, context);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_GetIdCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_GetIdentityPoolRolesCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_GetOpenIdTokenCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_GetOpenIdTokenForDeveloperIdentityCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_GetPrincipalTagAttributeMapCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_ListIdentitiesCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_ListIdentitiesResponse(data, context);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_ListIdentityPoolsCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_ListTagsForResourceCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_LookupDeveloperIdentityCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_MergeDeveloperIdentitiesCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_SetIdentityPoolRolesCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        await collectBody(output.body, context);
        const response = {
          $metadata: deserializeMetadata2(output)
        };
        return response;
      };
      de_SetPrincipalTagAttributeMapCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_TagResourceCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_UnlinkDeveloperIdentityCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        await collectBody(output.body, context);
        const response = {
          $metadata: deserializeMetadata2(output)
        };
        return response;
      };
      de_UnlinkIdentityCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        await collectBody(output.body, context);
        const response = {
          $metadata: deserializeMetadata2(output)
        };
        return response;
      };
      de_UntagResourceCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_UpdateIdentityPoolCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_CommandError = async (output, context) => {
        const parsedOutput = {
          ...output,
          body: await parseJsonErrorBody(output.body, context)
        };
        const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
        switch (errorCode) {
          case "InternalErrorException":
          case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
          case "InvalidParameterException":
          case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
          case "LimitExceededException":
          case "com.amazonaws.cognitoidentity#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
          case "NotAuthorizedException":
          case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
          case "ResourceConflictException":
          case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
          case "TooManyRequestsException":
          case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
          case "ResourceNotFoundException":
          case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
          case "ExternalServiceException":
          case "com.amazonaws.cognitoidentity#ExternalServiceException":
            throw await de_ExternalServiceExceptionRes(parsedOutput, context);
          case "InvalidIdentityPoolConfigurationException":
          case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
            throw await de_InvalidIdentityPoolConfigurationExceptionRes(parsedOutput, context);
          case "DeveloperUserAlreadyRegisteredException":
          case "com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":
            throw await de_DeveloperUserAlreadyRegisteredExceptionRes(parsedOutput, context);
          case "ConcurrentModificationException":
          case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
          default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError2({
              output,
              parsedBody,
              errorCode
            });
        }
      };
      de_ConcurrentModificationExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new ConcurrentModificationException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_DeveloperUserAlreadyRegisteredExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new DeveloperUserAlreadyRegisteredException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_ExternalServiceExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new ExternalServiceException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_InternalErrorExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new InternalErrorException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_InvalidIdentityPoolConfigurationExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new InvalidIdentityPoolConfigurationException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_InvalidParameterExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new InvalidParameterException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_LimitExceededExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new LimitExceededException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_NotAuthorizedExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new NotAuthorizedException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_ResourceConflictExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new ResourceConflictException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new ResourceNotFoundException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_TooManyRequestsExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new TooManyRequestsException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_Credentials = (output, context) => {
        return take(output, {
          AccessKeyId: expectString,
          Expiration: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
          SecretKey: expectString,
          SessionToken: expectString
        });
      };
      de_GetCredentialsForIdentityResponse = (output, context) => {
        return take(output, {
          Credentials: (_) => de_Credentials(_, context),
          IdentityId: expectString
        });
      };
      de_IdentitiesList = (output, context) => {
        const retVal = (output || []).filter((e3) => e3 != null).map((entry) => {
          return de_IdentityDescription(entry, context);
        });
        return retVal;
      };
      de_IdentityDescription = (output, context) => {
        return take(output, {
          CreationDate: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
          IdentityId: expectString,
          LastModifiedDate: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
          Logins: _json
        });
      };
      de_ListIdentitiesResponse = (output, context) => {
        return take(output, {
          Identities: (_) => de_IdentitiesList(_, context),
          IdentityPoolId: expectString,
          NextToken: expectString
        });
      };
      deserializeMetadata2 = (output) => ({
        httpStatusCode: output.statusCode,
        requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"]
      });
      throwDefaultError2 = withBaseException(CognitoIdentityServiceException);
      buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
        const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
        const contents = {
          protocol,
          hostname,
          port,
          method: "POST",
          path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
          headers
        };
        if (resolvedHostname !== void 0) {
          contents.hostname = resolvedHostname;
        }
        if (body !== void 0) {
          contents.body = body;
        }
        return new HttpRequest(contents);
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/CreateIdentityPoolCommand.js
  var CreateIdentityPoolCommand;
  var init_CreateIdentityPoolCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/CreateIdentityPoolCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      CreateIdentityPoolCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "CreateIdentityPool", {}).n("CognitoIdentityClient", "CreateIdentityPoolCommand").f(void 0, void 0).ser(se_CreateIdentityPoolCommand).de(de_CreateIdentityPoolCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/DeleteIdentitiesCommand.js
  var DeleteIdentitiesCommand;
  var init_DeleteIdentitiesCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/DeleteIdentitiesCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      DeleteIdentitiesCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "DeleteIdentities", {}).n("CognitoIdentityClient", "DeleteIdentitiesCommand").f(void 0, void 0).ser(se_DeleteIdentitiesCommand).de(de_DeleteIdentitiesCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/DeleteIdentityPoolCommand.js
  var DeleteIdentityPoolCommand;
  var init_DeleteIdentityPoolCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/DeleteIdentityPoolCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      DeleteIdentityPoolCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "DeleteIdentityPool", {}).n("CognitoIdentityClient", "DeleteIdentityPoolCommand").f(void 0, void 0).ser(se_DeleteIdentityPoolCommand).de(de_DeleteIdentityPoolCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/DescribeIdentityCommand.js
  var DescribeIdentityCommand;
  var init_DescribeIdentityCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/DescribeIdentityCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      DescribeIdentityCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "DescribeIdentity", {}).n("CognitoIdentityClient", "DescribeIdentityCommand").f(void 0, void 0).ser(se_DescribeIdentityCommand).de(de_DescribeIdentityCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/DescribeIdentityPoolCommand.js
  var DescribeIdentityPoolCommand;
  var init_DescribeIdentityPoolCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/DescribeIdentityPoolCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      DescribeIdentityPoolCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "DescribeIdentityPool", {}).n("CognitoIdentityClient", "DescribeIdentityPoolCommand").f(void 0, void 0).ser(se_DescribeIdentityPoolCommand).de(de_DescribeIdentityPoolCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetCredentialsForIdentityCommand.js
  var GetCredentialsForIdentityCommand;
  var init_GetCredentialsForIdentityCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetCredentialsForIdentityCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      GetCredentialsForIdentityCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "GetCredentialsForIdentity", {}).n("CognitoIdentityClient", "GetCredentialsForIdentityCommand").f(void 0, void 0).ser(se_GetCredentialsForIdentityCommand).de(de_GetCredentialsForIdentityCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetIdCommand.js
  var GetIdCommand;
  var init_GetIdCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetIdCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      GetIdCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "GetId", {}).n("CognitoIdentityClient", "GetIdCommand").f(void 0, void 0).ser(se_GetIdCommand).de(de_GetIdCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetIdentityPoolRolesCommand.js
  var GetIdentityPoolRolesCommand;
  var init_GetIdentityPoolRolesCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetIdentityPoolRolesCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      GetIdentityPoolRolesCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "GetIdentityPoolRoles", {}).n("CognitoIdentityClient", "GetIdentityPoolRolesCommand").f(void 0, void 0).ser(se_GetIdentityPoolRolesCommand).de(de_GetIdentityPoolRolesCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetOpenIdTokenCommand.js
  var GetOpenIdTokenCommand;
  var init_GetOpenIdTokenCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetOpenIdTokenCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      GetOpenIdTokenCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "GetOpenIdToken", {}).n("CognitoIdentityClient", "GetOpenIdTokenCommand").f(void 0, void 0).ser(se_GetOpenIdTokenCommand).de(de_GetOpenIdTokenCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetOpenIdTokenForDeveloperIdentityCommand.js
  var GetOpenIdTokenForDeveloperIdentityCommand;
  var init_GetOpenIdTokenForDeveloperIdentityCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetOpenIdTokenForDeveloperIdentityCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      GetOpenIdTokenForDeveloperIdentityCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "GetOpenIdTokenForDeveloperIdentity", {}).n("CognitoIdentityClient", "GetOpenIdTokenForDeveloperIdentityCommand").f(void 0, void 0).ser(se_GetOpenIdTokenForDeveloperIdentityCommand).de(de_GetOpenIdTokenForDeveloperIdentityCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetPrincipalTagAttributeMapCommand.js
  var GetPrincipalTagAttributeMapCommand;
  var init_GetPrincipalTagAttributeMapCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetPrincipalTagAttributeMapCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      GetPrincipalTagAttributeMapCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "GetPrincipalTagAttributeMap", {}).n("CognitoIdentityClient", "GetPrincipalTagAttributeMapCommand").f(void 0, void 0).ser(se_GetPrincipalTagAttributeMapCommand).de(de_GetPrincipalTagAttributeMapCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/ListIdentitiesCommand.js
  var ListIdentitiesCommand;
  var init_ListIdentitiesCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/ListIdentitiesCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      ListIdentitiesCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "ListIdentities", {}).n("CognitoIdentityClient", "ListIdentitiesCommand").f(void 0, void 0).ser(se_ListIdentitiesCommand).de(de_ListIdentitiesCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/ListIdentityPoolsCommand.js
  var ListIdentityPoolsCommand;
  var init_ListIdentityPoolsCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/ListIdentityPoolsCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      ListIdentityPoolsCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "ListIdentityPools", {}).n("CognitoIdentityClient", "ListIdentityPoolsCommand").f(void 0, void 0).ser(se_ListIdentityPoolsCommand).de(de_ListIdentityPoolsCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/ListTagsForResourceCommand.js
  var ListTagsForResourceCommand;
  var init_ListTagsForResourceCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/ListTagsForResourceCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      ListTagsForResourceCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "ListTagsForResource", {}).n("CognitoIdentityClient", "ListTagsForResourceCommand").f(void 0, void 0).ser(se_ListTagsForResourceCommand).de(de_ListTagsForResourceCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/LookupDeveloperIdentityCommand.js
  var LookupDeveloperIdentityCommand;
  var init_LookupDeveloperIdentityCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/LookupDeveloperIdentityCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      LookupDeveloperIdentityCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "LookupDeveloperIdentity", {}).n("CognitoIdentityClient", "LookupDeveloperIdentityCommand").f(void 0, void 0).ser(se_LookupDeveloperIdentityCommand).de(de_LookupDeveloperIdentityCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/MergeDeveloperIdentitiesCommand.js
  var MergeDeveloperIdentitiesCommand;
  var init_MergeDeveloperIdentitiesCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/MergeDeveloperIdentitiesCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      MergeDeveloperIdentitiesCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "MergeDeveloperIdentities", {}).n("CognitoIdentityClient", "MergeDeveloperIdentitiesCommand").f(void 0, void 0).ser(se_MergeDeveloperIdentitiesCommand).de(de_MergeDeveloperIdentitiesCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/SetIdentityPoolRolesCommand.js
  var SetIdentityPoolRolesCommand;
  var init_SetIdentityPoolRolesCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/SetIdentityPoolRolesCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      SetIdentityPoolRolesCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "SetIdentityPoolRoles", {}).n("CognitoIdentityClient", "SetIdentityPoolRolesCommand").f(void 0, void 0).ser(se_SetIdentityPoolRolesCommand).de(de_SetIdentityPoolRolesCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/SetPrincipalTagAttributeMapCommand.js
  var SetPrincipalTagAttributeMapCommand;
  var init_SetPrincipalTagAttributeMapCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/SetPrincipalTagAttributeMapCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      SetPrincipalTagAttributeMapCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "SetPrincipalTagAttributeMap", {}).n("CognitoIdentityClient", "SetPrincipalTagAttributeMapCommand").f(void 0, void 0).ser(se_SetPrincipalTagAttributeMapCommand).de(de_SetPrincipalTagAttributeMapCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/TagResourceCommand.js
  var TagResourceCommand;
  var init_TagResourceCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/TagResourceCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      TagResourceCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "TagResource", {}).n("CognitoIdentityClient", "TagResourceCommand").f(void 0, void 0).ser(se_TagResourceCommand).de(de_TagResourceCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/UnlinkDeveloperIdentityCommand.js
  var UnlinkDeveloperIdentityCommand;
  var init_UnlinkDeveloperIdentityCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/UnlinkDeveloperIdentityCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      UnlinkDeveloperIdentityCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "UnlinkDeveloperIdentity", {}).n("CognitoIdentityClient", "UnlinkDeveloperIdentityCommand").f(void 0, void 0).ser(se_UnlinkDeveloperIdentityCommand).de(de_UnlinkDeveloperIdentityCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/UnlinkIdentityCommand.js
  var UnlinkIdentityCommand;
  var init_UnlinkIdentityCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/UnlinkIdentityCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      UnlinkIdentityCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "UnlinkIdentity", {}).n("CognitoIdentityClient", "UnlinkIdentityCommand").f(void 0, void 0).ser(se_UnlinkIdentityCommand).de(de_UnlinkIdentityCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/UntagResourceCommand.js
  var UntagResourceCommand;
  var init_UntagResourceCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/UntagResourceCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      UntagResourceCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "UntagResource", {}).n("CognitoIdentityClient", "UntagResourceCommand").f(void 0, void 0).ser(se_UntagResourceCommand).de(de_UntagResourceCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/UpdateIdentityPoolCommand.js
  var UpdateIdentityPoolCommand;
  var init_UpdateIdentityPoolCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/UpdateIdentityPoolCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      UpdateIdentityPoolCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o3) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "UpdateIdentityPool", {}).n("CognitoIdentityClient", "UpdateIdentityPoolCommand").f(void 0, void 0).ser(se_UpdateIdentityPoolCommand).de(de_UpdateIdentityPoolCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/CognitoIdentity.js
  var commands, CognitoIdentity;
  var init_CognitoIdentity = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/CognitoIdentity.js"() {
      init_dist_es26();
      init_CognitoIdentityClient();
      init_CreateIdentityPoolCommand();
      init_DeleteIdentitiesCommand();
      init_DeleteIdentityPoolCommand();
      init_DescribeIdentityCommand();
      init_DescribeIdentityPoolCommand();
      init_GetCredentialsForIdentityCommand();
      init_GetIdCommand();
      init_GetIdentityPoolRolesCommand();
      init_GetOpenIdTokenCommand();
      init_GetOpenIdTokenForDeveloperIdentityCommand();
      init_GetPrincipalTagAttributeMapCommand();
      init_ListIdentitiesCommand();
      init_ListIdentityPoolsCommand();
      init_ListTagsForResourceCommand();
      init_LookupDeveloperIdentityCommand();
      init_MergeDeveloperIdentitiesCommand();
      init_SetIdentityPoolRolesCommand();
      init_SetPrincipalTagAttributeMapCommand();
      init_TagResourceCommand();
      init_UnlinkDeveloperIdentityCommand();
      init_UnlinkIdentityCommand();
      init_UntagResourceCommand();
      init_UpdateIdentityPoolCommand();
      commands = {
        CreateIdentityPoolCommand,
        DeleteIdentitiesCommand,
        DeleteIdentityPoolCommand,
        DescribeIdentityCommand,
        DescribeIdentityPoolCommand,
        GetCredentialsForIdentityCommand,
        GetIdCommand,
        GetIdentityPoolRolesCommand,
        GetOpenIdTokenCommand,
        GetOpenIdTokenForDeveloperIdentityCommand,
        GetPrincipalTagAttributeMapCommand,
        ListIdentitiesCommand,
        ListIdentityPoolsCommand,
        ListTagsForResourceCommand,
        LookupDeveloperIdentityCommand,
        MergeDeveloperIdentitiesCommand,
        SetIdentityPoolRolesCommand,
        SetPrincipalTagAttributeMapCommand,
        TagResourceCommand,
        UnlinkDeveloperIdentityCommand,
        UnlinkIdentityCommand,
        UntagResourceCommand,
        UpdateIdentityPoolCommand
      };
      CognitoIdentity = class extends CognitoIdentityClient {
      };
      createAggregatedClient(commands, CognitoIdentity);
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/index.js
  var init_commands = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/index.js"() {
      init_CreateIdentityPoolCommand();
      init_DeleteIdentitiesCommand();
      init_DeleteIdentityPoolCommand();
      init_DescribeIdentityCommand();
      init_DescribeIdentityPoolCommand();
      init_GetCredentialsForIdentityCommand();
      init_GetIdCommand();
      init_GetIdentityPoolRolesCommand();
      init_GetOpenIdTokenCommand();
      init_GetOpenIdTokenForDeveloperIdentityCommand();
      init_GetPrincipalTagAttributeMapCommand();
      init_ListIdentitiesCommand();
      init_ListIdentityPoolsCommand();
      init_ListTagsForResourceCommand();
      init_LookupDeveloperIdentityCommand();
      init_MergeDeveloperIdentitiesCommand();
      init_SetIdentityPoolRolesCommand();
      init_SetPrincipalTagAttributeMapCommand();
      init_TagResourceCommand();
      init_UnlinkDeveloperIdentityCommand();
      init_UnlinkIdentityCommand();
      init_UntagResourceCommand();
      init_UpdateIdentityPoolCommand();
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/pagination/Interfaces.js
  var init_Interfaces = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/pagination/Interfaces.js"() {
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/pagination/ListIdentityPoolsPaginator.js
  var paginateListIdentityPools;
  var init_ListIdentityPoolsPaginator = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/pagination/ListIdentityPoolsPaginator.js"() {
      init_dist_es28();
      init_CognitoIdentityClient();
      init_ListIdentityPoolsCommand();
      paginateListIdentityPools = createPaginator(CognitoIdentityClient, ListIdentityPoolsCommand, "NextToken", "NextToken", "MaxResults");
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/pagination/index.js
  var init_pagination2 = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/pagination/index.js"() {
      init_Interfaces();
      init_ListIdentityPoolsPaginator();
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/models/index.js
  var init_models = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/models/index.js"() {
      init_models_0();
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/index.js
  var init_dist_es39 = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/index.js"() {
      init_CognitoIdentityClient();
      init_CognitoIdentity();
      init_commands();
      init_pagination2();
      init_models();
      init_dist_es7();
    }
  });

  // node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/loadCognitoIdentity.js
  var loadCognitoIdentity_exports = {};
  __export(loadCognitoIdentity_exports, {
    CognitoIdentityClient: () => CognitoIdentityClient,
    GetCredentialsForIdentityCommand: () => GetCredentialsForIdentityCommand,
    GetIdCommand: () => GetIdCommand
  });
  var init_loadCognitoIdentity = __esm({
    "node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/loadCognitoIdentity.js"() {
      init_dist_es39();
    }
  });

  // node_modules/obliterator/iterator.js
  var require_iterator = __commonJS({
    "node_modules/obliterator/iterator.js"(exports, module) {
      function Iterator(next) {
        Object.defineProperty(this, "_next", {
          writable: false,
          enumerable: false,
          value: next
        });
        this.done = false;
      }
      Iterator.prototype.next = function() {
        if (this.done)
          return { done: true };
        var step = this._next();
        if (step.done)
          this.done = true;
        return step;
      };
      if (typeof Symbol !== "undefined")
        Iterator.prototype[Symbol.iterator] = function() {
          return this;
        };
      Iterator.of = function() {
        var args = arguments, l3 = args.length, i3 = 0;
        return new Iterator(function() {
          if (i3 >= l3)
            return { done: true };
          return { done: false, value: args[i3++] };
        });
      };
      Iterator.empty = function() {
        var iterator = new Iterator(null);
        iterator.done = true;
        return iterator;
      };
      Iterator.is = function(value) {
        if (value instanceof Iterator)
          return true;
        return typeof value === "object" && value !== null && typeof value.next === "function";
      };
      module.exports = Iterator;
    }
  });

  // node_modules/obliterator/foreach.js
  var require_foreach = __commonJS({
    "node_modules/obliterator/foreach.js"(exports, module) {
      var ARRAY_BUFFER_SUPPORT = typeof ArrayBuffer !== "undefined";
      var SYMBOL_SUPPORT = typeof Symbol !== "undefined";
      function forEach(iterable, callback) {
        var iterator, k3, i3, l3, s3;
        if (!iterable)
          throw new Error("obliterator/forEach: invalid iterable.");
        if (typeof callback !== "function")
          throw new Error("obliterator/forEach: expecting a callback.");
        if (Array.isArray(iterable) || ARRAY_BUFFER_SUPPORT && ArrayBuffer.isView(iterable) || typeof iterable === "string" || iterable.toString() === "[object Arguments]") {
          for (i3 = 0, l3 = iterable.length; i3 < l3; i3++)
            callback(iterable[i3], i3);
          return;
        }
        if (typeof iterable.forEach === "function") {
          iterable.forEach(callback);
          return;
        }
        if (SYMBOL_SUPPORT && Symbol.iterator in iterable && typeof iterable.next !== "function") {
          iterable = iterable[Symbol.iterator]();
        }
        if (typeof iterable.next === "function") {
          iterator = iterable;
          i3 = 0;
          while (s3 = iterator.next(), s3.done !== true) {
            callback(s3.value, i3);
            i3++;
          }
          return;
        }
        for (k3 in iterable) {
          if (iterable.hasOwnProperty(k3)) {
            callback(iterable[k3], k3);
          }
        }
        return;
      }
      forEach.forEachWithNullKeys = function(iterable, callback) {
        var iterator, k3, i3, l3, s3;
        if (!iterable)
          throw new Error("obliterator/forEachWithNullKeys: invalid iterable.");
        if (typeof callback !== "function")
          throw new Error("obliterator/forEachWithNullKeys: expecting a callback.");
        if (Array.isArray(iterable) || ARRAY_BUFFER_SUPPORT && ArrayBuffer.isView(iterable) || typeof iterable === "string" || iterable.toString() === "[object Arguments]") {
          for (i3 = 0, l3 = iterable.length; i3 < l3; i3++)
            callback(iterable[i3], null);
          return;
        }
        if (iterable instanceof Set) {
          iterable.forEach(function(value) {
            callback(value, null);
          });
          return;
        }
        if (typeof iterable.forEach === "function") {
          iterable.forEach(callback);
          return;
        }
        if (SYMBOL_SUPPORT && Symbol.iterator in iterable && typeof iterable.next !== "function") {
          iterable = iterable[Symbol.iterator]();
        }
        if (typeof iterable.next === "function") {
          iterator = iterable;
          i3 = 0;
          while (s3 = iterator.next(), s3.done !== true) {
            callback(s3.value, null);
            i3++;
          }
          return;
        }
        for (k3 in iterable) {
          if (iterable.hasOwnProperty(k3)) {
            callback(iterable[k3], k3);
          }
        }
        return;
      };
      module.exports = forEach;
    }
  });

  // node_modules/mnemonist/utils/typed-arrays.js
  var require_typed_arrays = __commonJS({
    "node_modules/mnemonist/utils/typed-arrays.js"(exports) {
      var MAX_8BIT_INTEGER = Math.pow(2, 8) - 1;
      var MAX_16BIT_INTEGER = Math.pow(2, 16) - 1;
      var MAX_32BIT_INTEGER = Math.pow(2, 32) - 1;
      var MAX_SIGNED_8BIT_INTEGER = Math.pow(2, 7) - 1;
      var MAX_SIGNED_16BIT_INTEGER = Math.pow(2, 15) - 1;
      var MAX_SIGNED_32BIT_INTEGER = Math.pow(2, 31) - 1;
      exports.getPointerArray = function(size) {
        var maxIndex = size - 1;
        if (maxIndex <= MAX_8BIT_INTEGER)
          return Uint8Array;
        if (maxIndex <= MAX_16BIT_INTEGER)
          return Uint16Array;
        if (maxIndex <= MAX_32BIT_INTEGER)
          return Uint32Array;
        return Float64Array;
      };
      exports.getSignedPointerArray = function(size) {
        var maxIndex = size - 1;
        if (maxIndex <= MAX_SIGNED_8BIT_INTEGER)
          return Int8Array;
        if (maxIndex <= MAX_SIGNED_16BIT_INTEGER)
          return Int16Array;
        if (maxIndex <= MAX_SIGNED_32BIT_INTEGER)
          return Int32Array;
        return Float64Array;
      };
      exports.getNumberType = function(value) {
        if (value === (value | 0)) {
          if (Math.sign(value) === -1) {
            if (value <= 127 && value >= -128)
              return Int8Array;
            if (value <= 32767 && value >= -32768)
              return Int16Array;
            return Int32Array;
          } else {
            if (value <= 255)
              return Uint8Array;
            if (value <= 65535)
              return Uint16Array;
            return Uint32Array;
          }
        }
        return Float64Array;
      };
      var TYPE_PRIORITY = {
        Uint8Array: 1,
        Int8Array: 2,
        Uint16Array: 3,
        Int16Array: 4,
        Uint32Array: 5,
        Int32Array: 6,
        Float32Array: 7,
        Float64Array: 8
      };
      exports.getMinimalRepresentation = function(array, getter) {
        var maxType = null, maxPriority = 0, p3, t3, v3, i3, l3;
        for (i3 = 0, l3 = array.length; i3 < l3; i3++) {
          v3 = getter ? getter(array[i3]) : array[i3];
          t3 = exports.getNumberType(v3);
          p3 = TYPE_PRIORITY[t3.name];
          if (p3 > maxPriority) {
            maxPriority = p3;
            maxType = t3;
          }
        }
        return maxType;
      };
      exports.isTypedArray = function(value) {
        return typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView(value);
      };
      exports.concat = function() {
        var length = 0, i3, o3, l3;
        for (i3 = 0, l3 = arguments.length; i3 < l3; i3++)
          length += arguments[i3].length;
        var array = new arguments[0].constructor(length);
        for (i3 = 0, o3 = 0; i3 < l3; i3++) {
          array.set(arguments[i3], o3);
          o3 += arguments[i3].length;
        }
        return array;
      };
      exports.indices = function(length) {
        var PointerArray = exports.getPointerArray(length);
        var array = new PointerArray(length);
        for (var i3 = 0; i3 < length; i3++)
          array[i3] = i3;
        return array;
      };
    }
  });

  // node_modules/mnemonist/utils/iterables.js
  var require_iterables = __commonJS({
    "node_modules/mnemonist/utils/iterables.js"(exports) {
      var forEach = require_foreach();
      var typed = require_typed_arrays();
      function isArrayLike(target) {
        return Array.isArray(target) || typed.isTypedArray(target);
      }
      function guessLength(target) {
        if (typeof target.length === "number")
          return target.length;
        if (typeof target.size === "number")
          return target.size;
        return;
      }
      function toArray(target) {
        var l3 = guessLength(target);
        var array = typeof l3 === "number" ? new Array(l3) : [];
        var i3 = 0;
        forEach(target, function(value) {
          array[i3++] = value;
        });
        return array;
      }
      function toArrayWithIndices(target) {
        var l3 = guessLength(target);
        var IndexArray = typeof l3 === "number" ? typed.getPointerArray(l3) : Array;
        var array = typeof l3 === "number" ? new Array(l3) : [];
        var indices = typeof l3 === "number" ? new IndexArray(l3) : [];
        var i3 = 0;
        forEach(target, function(value) {
          array[i3] = value;
          indices[i3] = i3++;
        });
        return [array, indices];
      }
      exports.isArrayLike = isArrayLike;
      exports.guessLength = guessLength;
      exports.toArray = toArray;
      exports.toArrayWithIndices = toArrayWithIndices;
    }
  });

  // node_modules/mnemonist/lru-cache.js
  var require_lru_cache = __commonJS({
    "node_modules/mnemonist/lru-cache.js"(exports, module) {
      var Iterator = require_iterator();
      var forEach = require_foreach();
      var typed = require_typed_arrays();
      var iterables = require_iterables();
      function LRUCache2(Keys, Values, capacity) {
        if (arguments.length < 2) {
          capacity = Keys;
          Keys = null;
          Values = null;
        }
        this.capacity = capacity;
        if (typeof this.capacity !== "number" || this.capacity <= 0)
          throw new Error("mnemonist/lru-cache: capacity should be positive number.");
        var PointerArray = typed.getPointerArray(capacity);
        this.forward = new PointerArray(capacity);
        this.backward = new PointerArray(capacity);
        this.K = typeof Keys === "function" ? new Keys(capacity) : new Array(capacity);
        this.V = typeof Values === "function" ? new Values(capacity) : new Array(capacity);
        this.size = 0;
        this.head = 0;
        this.tail = 0;
        this.items = {};
      }
      LRUCache2.prototype.clear = function() {
        this.size = 0;
        this.head = 0;
        this.tail = 0;
        this.items = {};
      };
      LRUCache2.prototype.splayOnTop = function(pointer) {
        var oldHead = this.head;
        if (this.head === pointer)
          return this;
        var previous = this.backward[pointer], next = this.forward[pointer];
        if (this.tail === pointer) {
          this.tail = previous;
        } else {
          this.backward[next] = previous;
        }
        this.forward[previous] = next;
        this.backward[oldHead] = pointer;
        this.head = pointer;
        this.forward[pointer] = oldHead;
        return this;
      };
      LRUCache2.prototype.set = function(key, value) {
        var pointer = this.items[key];
        if (typeof pointer !== "undefined") {
          this.splayOnTop(pointer);
          this.V[pointer] = value;
          return;
        }
        if (this.size < this.capacity) {
          pointer = this.size++;
        } else {
          pointer = this.tail;
          this.tail = this.backward[pointer];
          delete this.items[this.K[pointer]];
        }
        this.items[key] = pointer;
        this.K[pointer] = key;
        this.V[pointer] = value;
        this.forward[pointer] = this.head;
        this.backward[this.head] = pointer;
        this.head = pointer;
      };
      LRUCache2.prototype.setpop = function(key, value) {
        var oldValue = null;
        var oldKey = null;
        var pointer = this.items[key];
        if (typeof pointer !== "undefined") {
          this.splayOnTop(pointer);
          oldValue = this.V[pointer];
          this.V[pointer] = value;
          return { evicted: false, key, value: oldValue };
        }
        if (this.size < this.capacity) {
          pointer = this.size++;
        } else {
          pointer = this.tail;
          this.tail = this.backward[pointer];
          oldValue = this.V[pointer];
          oldKey = this.K[pointer];
          delete this.items[this.K[pointer]];
        }
        this.items[key] = pointer;
        this.K[pointer] = key;
        this.V[pointer] = value;
        this.forward[pointer] = this.head;
        this.backward[this.head] = pointer;
        this.head = pointer;
        if (oldKey) {
          return { evicted: true, key: oldKey, value: oldValue };
        } else {
          return null;
        }
      };
      LRUCache2.prototype.has = function(key) {
        return key in this.items;
      };
      LRUCache2.prototype.get = function(key) {
        var pointer = this.items[key];
        if (typeof pointer === "undefined")
          return;
        this.splayOnTop(pointer);
        return this.V[pointer];
      };
      LRUCache2.prototype.peek = function(key) {
        var pointer = this.items[key];
        if (typeof pointer === "undefined")
          return;
        return this.V[pointer];
      };
      LRUCache2.prototype.forEach = function(callback, scope) {
        scope = arguments.length > 1 ? scope : this;
        var i3 = 0, l3 = this.size;
        var pointer = this.head, keys = this.K, values = this.V, forward = this.forward;
        while (i3 < l3) {
          callback.call(scope, values[pointer], keys[pointer], this);
          pointer = forward[pointer];
          i3++;
        }
      };
      LRUCache2.prototype.keys = function() {
        var i3 = 0, l3 = this.size;
        var pointer = this.head, keys = this.K, forward = this.forward;
        return new Iterator(function() {
          if (i3 >= l3)
            return { done: true };
          var key = keys[pointer];
          i3++;
          if (i3 < l3)
            pointer = forward[pointer];
          return {
            done: false,
            value: key
          };
        });
      };
      LRUCache2.prototype.values = function() {
        var i3 = 0, l3 = this.size;
        var pointer = this.head, values = this.V, forward = this.forward;
        return new Iterator(function() {
          if (i3 >= l3)
            return { done: true };
          var value = values[pointer];
          i3++;
          if (i3 < l3)
            pointer = forward[pointer];
          return {
            done: false,
            value
          };
        });
      };
      LRUCache2.prototype.entries = function() {
        var i3 = 0, l3 = this.size;
        var pointer = this.head, keys = this.K, values = this.V, forward = this.forward;
        return new Iterator(function() {
          if (i3 >= l3)
            return { done: true };
          var key = keys[pointer], value = values[pointer];
          i3++;
          if (i3 < l3)
            pointer = forward[pointer];
          return {
            done: false,
            value: [key, value]
          };
        });
      };
      if (typeof Symbol !== "undefined")
        LRUCache2.prototype[Symbol.iterator] = LRUCache2.prototype.entries;
      LRUCache2.prototype.inspect = function() {
        var proxy = /* @__PURE__ */ new Map();
        var iterator = this.entries(), step;
        while (step = iterator.next(), !step.done)
          proxy.set(step.value[0], step.value[1]);
        Object.defineProperty(proxy, "constructor", {
          value: LRUCache2,
          enumerable: false
        });
        return proxy;
      };
      if (typeof Symbol !== "undefined")
        LRUCache2.prototype[Symbol.for("nodejs.util.inspect.custom")] = LRUCache2.prototype.inspect;
      LRUCache2.from = function(iterable, Keys, Values, capacity) {
        if (arguments.length < 2) {
          capacity = iterables.guessLength(iterable);
          if (typeof capacity !== "number")
            throw new Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.");
        } else if (arguments.length === 2) {
          capacity = Keys;
          Keys = null;
          Values = null;
        }
        var cache = new LRUCache2(Keys, Values, capacity);
        forEach(iterable, function(value, key) {
          cache.set(key, value);
        });
        return cache;
      };
      module.exports = LRUCache2;
    }
  });

  // src/utils/createDynamoDBClient.js
  init_dist_es39();

  // node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/fromCognitoIdentity.js
  init_dist_es36();

  // node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/resolveLogins.js
  function resolveLogins(logins) {
    return Promise.all(Object.keys(logins).reduce((arr, name) => {
      const tokenOrProvider = logins[name];
      if (typeof tokenOrProvider === "string") {
        arr.push([name, tokenOrProvider]);
      } else {
        arr.push(tokenOrProvider().then((token) => [name, token]));
      }
      return arr;
    }, [])).then((resolvedPairs) => resolvedPairs.reduce((logins2, [key, value]) => {
      logins2[key] = value;
      return logins2;
    }, {}));
  }

  // node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/fromCognitoIdentity.js
  function fromCognitoIdentity(parameters) {
    return async () => {
      parameters.logger?.debug("@aws-sdk/credential-provider-cognito-identity", "fromCognitoIdentity");
      const { GetCredentialsForIdentityCommand: GetCredentialsForIdentityCommand2, CognitoIdentityClient: CognitoIdentityClient2 } = await Promise.resolve().then(() => (init_loadCognitoIdentity(), loadCognitoIdentity_exports));
      const { Credentials: { AccessKeyId = throwOnMissingAccessKeyId(), Expiration, SecretKey = throwOnMissingSecretKey(), SessionToken } = throwOnMissingCredentials() } = await (parameters.client ?? new CognitoIdentityClient2(Object.assign({}, parameters.clientConfig ?? {}, {
        region: parameters.clientConfig?.region ?? parameters.parentClientConfig?.region
      }))).send(new GetCredentialsForIdentityCommand2({
        CustomRoleArn: parameters.customRoleArn,
        IdentityId: parameters.identityId,
        Logins: parameters.logins ? await resolveLogins(parameters.logins) : void 0
      }));
      return {
        identityId: parameters.identityId,
        accessKeyId: AccessKeyId,
        secretAccessKey: SecretKey,
        sessionToken: SessionToken,
        expiration: Expiration
      };
    };
  }
  function throwOnMissingAccessKeyId() {
    throw new CredentialsProviderError("Response from Amazon Cognito contained no access key ID");
  }
  function throwOnMissingCredentials() {
    throw new CredentialsProviderError("Response from Amazon Cognito contained no credentials");
  }
  function throwOnMissingSecretKey() {
    throw new CredentialsProviderError("Response from Amazon Cognito contained no secret key");
  }

  // node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/fromCognitoIdentityPool.js
  init_dist_es36();

  // node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/IndexedDbStorage.js
  var STORE_NAME = "IdentityIds";
  var IndexedDbStorage = class {
    constructor(dbName = "aws:cognito-identity-ids") {
      this.dbName = dbName;
    }
    getItem(key) {
      return this.withObjectStore("readonly", (store) => {
        const req = store.get(key);
        return new Promise((resolve) => {
          req.onerror = () => resolve(null);
          req.onsuccess = () => resolve(req.result ? req.result.value : null);
        });
      }).catch(() => null);
    }
    removeItem(key) {
      return this.withObjectStore("readwrite", (store) => {
        const req = store.delete(key);
        return new Promise((resolve, reject) => {
          req.onerror = () => reject(req.error);
          req.onsuccess = () => resolve();
        });
      });
    }
    setItem(id, value) {
      return this.withObjectStore("readwrite", (store) => {
        const req = store.put({ id, value });
        return new Promise((resolve, reject) => {
          req.onerror = () => reject(req.error);
          req.onsuccess = () => resolve();
        });
      });
    }
    getDb() {
      const openDbRequest = self.indexedDB.open(this.dbName, 1);
      return new Promise((resolve, reject) => {
        openDbRequest.onsuccess = () => {
          resolve(openDbRequest.result);
        };
        openDbRequest.onerror = () => {
          reject(openDbRequest.error);
        };
        openDbRequest.onblocked = () => {
          reject(new Error("Unable to access DB"));
        };
        openDbRequest.onupgradeneeded = () => {
          const db = openDbRequest.result;
          db.onerror = () => {
            reject(new Error("Failed to create object store"));
          };
          db.createObjectStore(STORE_NAME, { keyPath: "id" });
        };
      });
    }
    withObjectStore(mode, action) {
      return this.getDb().then((db) => {
        const tx = db.transaction(STORE_NAME, mode);
        tx.oncomplete = () => db.close();
        return new Promise((resolve, reject) => {
          tx.onerror = () => reject(tx.error);
          resolve(action(tx.objectStore(STORE_NAME)));
        }).catch((err) => {
          db.close();
          throw err;
        });
      });
    }
  };

  // node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/InMemoryStorage.js
  var InMemoryStorage = class {
    constructor(store = {}) {
      this.store = store;
    }
    getItem(key) {
      if (key in this.store) {
        return this.store[key];
      }
      return null;
    }
    removeItem(key) {
      delete this.store[key];
    }
    setItem(key, value) {
      this.store[key] = value;
    }
  };

  // node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/localStorage.js
  var inMemoryStorage = new InMemoryStorage();
  function localStorage() {
    if (typeof self === "object" && self.indexedDB) {
      return new IndexedDbStorage();
    }
    if (typeof window === "object" && window.localStorage) {
      return window.localStorage;
    }
    return inMemoryStorage;
  }

  // node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/fromCognitoIdentityPool.js
  function fromCognitoIdentityPool({ accountId, cache = localStorage(), client, clientConfig, customRoleArn, identityPoolId, logins, userIdentifier = !logins || Object.keys(logins).length === 0 ? "ANONYMOUS" : void 0, logger: logger2, parentClientConfig }) {
    logger2?.debug("@aws-sdk/credential-provider-cognito-identity", "fromCognitoIdentity");
    const cacheKey = userIdentifier ? `aws:cognito-identity-credentials:${identityPoolId}:${userIdentifier}` : void 0;
    let provider = async () => {
      const { GetIdCommand: GetIdCommand2, CognitoIdentityClient: CognitoIdentityClient2 } = await Promise.resolve().then(() => (init_loadCognitoIdentity(), loadCognitoIdentity_exports));
      const _client = client ?? new CognitoIdentityClient2(Object.assign({}, clientConfig ?? {}, { region: clientConfig?.region ?? parentClientConfig?.region }));
      let identityId = cacheKey && await cache.getItem(cacheKey);
      if (!identityId) {
        const { IdentityId = throwOnMissingId() } = await _client.send(new GetIdCommand2({
          AccountId: accountId,
          IdentityPoolId: identityPoolId,
          Logins: logins ? await resolveLogins(logins) : void 0
        }));
        identityId = IdentityId;
        if (cacheKey) {
          Promise.resolve(cache.setItem(cacheKey, identityId)).catch(() => {
          });
        }
      }
      provider = fromCognitoIdentity({
        client: _client,
        customRoleArn,
        logins,
        identityId
      });
      return provider();
    };
    return () => provider().catch(async (err) => {
      if (cacheKey) {
        Promise.resolve(cache.removeItem(cacheKey)).catch(() => {
        });
      }
      throw err;
    });
  }
  function throwOnMissingId() {
    throw new CredentialsProviderError("Response from Amazon Cognito contained no identity ID");
  }

  // node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/endpointDiscoveryMiddleware.js
  init_dist_es2();

  // node_modules/@aws-sdk/endpoint-cache/dist-es/EndpointCache.js
  var import_lru_cache = __toESM(require_lru_cache());
  var EndpointCache = class {
    constructor(capacity) {
      this.cache = new import_lru_cache.default(capacity);
    }
    getEndpoint(key) {
      const endpointsWithExpiry = this.get(key);
      if (!endpointsWithExpiry || endpointsWithExpiry.length === 0) {
        return void 0;
      }
      const endpoints = endpointsWithExpiry.map((endpoint) => endpoint.Address);
      return endpoints[Math.floor(Math.random() * endpoints.length)];
    }
    get(key) {
      if (!this.has(key)) {
        return;
      }
      const value = this.cache.get(key);
      if (!value) {
        return;
      }
      const now = Date.now();
      const endpointsWithExpiry = value.filter((endpoint) => now < endpoint.Expires);
      if (endpointsWithExpiry.length === 0) {
        this.delete(key);
        return void 0;
      }
      return endpointsWithExpiry;
    }
    set(key, endpoints) {
      const now = Date.now();
      this.cache.set(key, endpoints.map(({ Address, CachePeriodInMinutes }) => ({
        Address,
        Expires: now + CachePeriodInMinutes * 60 * 1e3
      })));
    }
    delete(key) {
      this.cache.set(key, []);
    }
    has(key) {
      if (!this.cache.has(key)) {
        return false;
      }
      const endpoints = this.cache.peek(key);
      if (!endpoints) {
        return false;
      }
      return endpoints.length > 0;
    }
    clear() {
      this.cache.clear();
    }
  };

  // node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/resolveEndpointDiscoveryConfig.js
  var resolveEndpointDiscoveryConfig = (input, { endpointDiscoveryCommandCtor }) => ({
    ...input,
    endpointDiscoveryCommandCtor,
    endpointCache: new EndpointCache(input.endpointCacheSize ?? 1e3),
    endpointDiscoveryEnabled: input.endpointDiscoveryEnabled !== void 0 ? () => Promise.resolve(input.endpointDiscoveryEnabled) : input.endpointDiscoveryEnabledProvider,
    isClientEndpointDiscoveryEnabled: input.endpointDiscoveryEnabled !== void 0
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/DynamoDBClient.js
  init_dist_es3();
  init_dist_es4();
  init_dist_es5();
  init_dist_es8();
  init_dist_es11();
  init_dist_es28();
  init_dist_es29();
  init_dist_es15();
  init_dist_es27();
  init_dist_es26();

  // node_modules/@aws-sdk/client-dynamodb/dist-es/auth/httpAuthSchemeProvider.js
  init_dist_es32();
  init_dist_es10();
  var defaultDynamoDBHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
      operation: getSmithyContext(context).operation,
      region: await normalizeProvider(config.region)() || (() => {
        throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
      })()
    };
  };
  function createAwsAuthSigv4HttpAuthOption2(authParameters) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "dynamodb",
        region: authParameters.region
      },
      propertiesExtractor: (config, context) => ({
        signingProperties: {
          config,
          context
        }
      })
    };
  }
  var defaultDynamoDBHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
      default: {
        options.push(createAwsAuthSigv4HttpAuthOption2(authParameters));
      }
    }
    return options;
  };
  var resolveHttpAuthSchemeConfig2 = (config) => {
    const config_0 = resolveAwsSdkSigV4Config(config);
    return {
      ...config_0
    };
  };

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeEndpointsCommand.js
  init_dist_es15();
  init_dist_es14();
  init_dist_es26();

  // node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/EndpointParameters.js
  var resolveClientEndpointParameters2 = (options) => {
    return {
      ...options,
      useDualstackEndpoint: options.useDualstackEndpoint ?? false,
      useFipsEndpoint: options.useFipsEndpoint ?? false,
      defaultSigningName: "dynamodb"
    };
  };
  var commonParams2 = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
  };

  // node_modules/@aws-sdk/client-dynamodb/dist-es/protocols/Aws_json1_0.js
  init_dist_es32();
  init_dist_es2();
  init_dist_es26();

  // node_modules/@aws-sdk/client-dynamodb/dist-es/models/DynamoDBServiceException.js
  init_dist_es26();
  var DynamoDBServiceException = class _DynamoDBServiceException extends ServiceException {
    constructor(options) {
      super(options);
      Object.setPrototypeOf(this, _DynamoDBServiceException.prototype);
    }
  };

  // node_modules/@aws-sdk/client-dynamodb/dist-es/models/models_0.js
  var BackupInUseException = class _BackupInUseException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "BackupInUseException",
        $fault: "client",
        ...opts
      });
      this.name = "BackupInUseException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _BackupInUseException.prototype);
    }
  };
  var BackupNotFoundException = class _BackupNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "BackupNotFoundException",
        $fault: "client",
        ...opts
      });
      this.name = "BackupNotFoundException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _BackupNotFoundException.prototype);
    }
  };
  var InternalServerError = class _InternalServerError extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "InternalServerError",
        $fault: "server",
        ...opts
      });
      this.name = "InternalServerError";
      this.$fault = "server";
      Object.setPrototypeOf(this, _InternalServerError.prototype);
    }
  };
  var RequestLimitExceeded = class _RequestLimitExceeded extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "RequestLimitExceeded",
        $fault: "client",
        ...opts
      });
      this.name = "RequestLimitExceeded";
      this.$fault = "client";
      Object.setPrototypeOf(this, _RequestLimitExceeded.prototype);
    }
  };
  var InvalidEndpointException = class _InvalidEndpointException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "InvalidEndpointException",
        $fault: "client",
        ...opts
      });
      this.name = "InvalidEndpointException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _InvalidEndpointException.prototype);
      this.Message = opts.Message;
    }
  };
  var ProvisionedThroughputExceededException = class _ProvisionedThroughputExceededException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "ProvisionedThroughputExceededException",
        $fault: "client",
        ...opts
      });
      this.name = "ProvisionedThroughputExceededException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _ProvisionedThroughputExceededException.prototype);
    }
  };
  var ResourceNotFoundException2 = class _ResourceNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "ResourceNotFoundException",
        $fault: "client",
        ...opts
      });
      this.name = "ResourceNotFoundException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
    }
  };
  var ItemCollectionSizeLimitExceededException = class _ItemCollectionSizeLimitExceededException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "ItemCollectionSizeLimitExceededException",
        $fault: "client",
        ...opts
      });
      this.name = "ItemCollectionSizeLimitExceededException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _ItemCollectionSizeLimitExceededException.prototype);
    }
  };
  var ContinuousBackupsUnavailableException = class _ContinuousBackupsUnavailableException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "ContinuousBackupsUnavailableException",
        $fault: "client",
        ...opts
      });
      this.name = "ContinuousBackupsUnavailableException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _ContinuousBackupsUnavailableException.prototype);
    }
  };
  var LimitExceededException2 = class _LimitExceededException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "LimitExceededException",
        $fault: "client",
        ...opts
      });
      this.name = "LimitExceededException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _LimitExceededException.prototype);
    }
  };
  var TableInUseException = class _TableInUseException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "TableInUseException",
        $fault: "client",
        ...opts
      });
      this.name = "TableInUseException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _TableInUseException.prototype);
    }
  };
  var TableNotFoundException = class _TableNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "TableNotFoundException",
        $fault: "client",
        ...opts
      });
      this.name = "TableNotFoundException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _TableNotFoundException.prototype);
    }
  };
  var GlobalTableAlreadyExistsException = class _GlobalTableAlreadyExistsException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "GlobalTableAlreadyExistsException",
        $fault: "client",
        ...opts
      });
      this.name = "GlobalTableAlreadyExistsException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _GlobalTableAlreadyExistsException.prototype);
    }
  };
  var ResourceInUseException = class _ResourceInUseException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "ResourceInUseException",
        $fault: "client",
        ...opts
      });
      this.name = "ResourceInUseException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _ResourceInUseException.prototype);
    }
  };
  var TransactionConflictException = class _TransactionConflictException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "TransactionConflictException",
        $fault: "client",
        ...opts
      });
      this.name = "TransactionConflictException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _TransactionConflictException.prototype);
    }
  };
  var ExportNotFoundException = class _ExportNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "ExportNotFoundException",
        $fault: "client",
        ...opts
      });
      this.name = "ExportNotFoundException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _ExportNotFoundException.prototype);
    }
  };
  var GlobalTableNotFoundException = class _GlobalTableNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "GlobalTableNotFoundException",
        $fault: "client",
        ...opts
      });
      this.name = "GlobalTableNotFoundException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _GlobalTableNotFoundException.prototype);
    }
  };
  var ImportNotFoundException = class _ImportNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "ImportNotFoundException",
        $fault: "client",
        ...opts
      });
      this.name = "ImportNotFoundException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _ImportNotFoundException.prototype);
    }
  };
  var DuplicateItemException = class _DuplicateItemException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "DuplicateItemException",
        $fault: "client",
        ...opts
      });
      this.name = "DuplicateItemException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _DuplicateItemException.prototype);
    }
  };
  var IdempotentParameterMismatchException = class _IdempotentParameterMismatchException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "IdempotentParameterMismatchException",
        $fault: "client",
        ...opts
      });
      this.name = "IdempotentParameterMismatchException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _IdempotentParameterMismatchException.prototype);
      this.Message = opts.Message;
    }
  };
  var TransactionInProgressException = class _TransactionInProgressException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "TransactionInProgressException",
        $fault: "client",
        ...opts
      });
      this.name = "TransactionInProgressException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _TransactionInProgressException.prototype);
      this.Message = opts.Message;
    }
  };
  var ExportConflictException = class _ExportConflictException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "ExportConflictException",
        $fault: "client",
        ...opts
      });
      this.name = "ExportConflictException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _ExportConflictException.prototype);
    }
  };
  var InvalidExportTimeException = class _InvalidExportTimeException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "InvalidExportTimeException",
        $fault: "client",
        ...opts
      });
      this.name = "InvalidExportTimeException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _InvalidExportTimeException.prototype);
    }
  };
  var PointInTimeRecoveryUnavailableException = class _PointInTimeRecoveryUnavailableException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "PointInTimeRecoveryUnavailableException",
        $fault: "client",
        ...opts
      });
      this.name = "PointInTimeRecoveryUnavailableException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _PointInTimeRecoveryUnavailableException.prototype);
    }
  };
  var ImportConflictException = class _ImportConflictException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "ImportConflictException",
        $fault: "client",
        ...opts
      });
      this.name = "ImportConflictException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _ImportConflictException.prototype);
    }
  };
  var TableAlreadyExistsException = class _TableAlreadyExistsException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "TableAlreadyExistsException",
        $fault: "client",
        ...opts
      });
      this.name = "TableAlreadyExistsException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _TableAlreadyExistsException.prototype);
    }
  };
  var InvalidRestoreTimeException = class _InvalidRestoreTimeException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "InvalidRestoreTimeException",
        $fault: "client",
        ...opts
      });
      this.name = "InvalidRestoreTimeException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _InvalidRestoreTimeException.prototype);
    }
  };
  var ReplicaAlreadyExistsException = class _ReplicaAlreadyExistsException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "ReplicaAlreadyExistsException",
        $fault: "client",
        ...opts
      });
      this.name = "ReplicaAlreadyExistsException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _ReplicaAlreadyExistsException.prototype);
    }
  };
  var ReplicaNotFoundException = class _ReplicaNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "ReplicaNotFoundException",
        $fault: "client",
        ...opts
      });
      this.name = "ReplicaNotFoundException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _ReplicaNotFoundException.prototype);
    }
  };
  var IndexNotFoundException = class _IndexNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "IndexNotFoundException",
        $fault: "client",
        ...opts
      });
      this.name = "IndexNotFoundException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _IndexNotFoundException.prototype);
    }
  };
  var AttributeValue;
  (function(AttributeValue2) {
    AttributeValue2.visit = (value, visitor) => {
      if (value.S !== void 0)
        return visitor.S(value.S);
      if (value.N !== void 0)
        return visitor.N(value.N);
      if (value.B !== void 0)
        return visitor.B(value.B);
      if (value.SS !== void 0)
        return visitor.SS(value.SS);
      if (value.NS !== void 0)
        return visitor.NS(value.NS);
      if (value.BS !== void 0)
        return visitor.BS(value.BS);
      if (value.M !== void 0)
        return visitor.M(value.M);
      if (value.L !== void 0)
        return visitor.L(value.L);
      if (value.NULL !== void 0)
        return visitor.NULL(value.NULL);
      if (value.BOOL !== void 0)
        return visitor.BOOL(value.BOOL);
      return visitor._(value.$unknown[0], value.$unknown[1]);
    };
  })(AttributeValue || (AttributeValue = {}));
  var ConditionalCheckFailedException = class _ConditionalCheckFailedException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "ConditionalCheckFailedException",
        $fault: "client",
        ...opts
      });
      this.name = "ConditionalCheckFailedException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _ConditionalCheckFailedException.prototype);
      this.Item = opts.Item;
    }
  };
  var TransactionCanceledException = class _TransactionCanceledException extends DynamoDBServiceException {
    constructor(opts) {
      super({
        name: "TransactionCanceledException",
        $fault: "client",
        ...opts
      });
      this.name = "TransactionCanceledException";
      this.$fault = "client";
      Object.setPrototypeOf(this, _TransactionCanceledException.prototype);
      this.Message = opts.Message;
      this.CancellationReasons = opts.CancellationReasons;
    }
  };

  // node_modules/@aws-sdk/client-dynamodb/dist-es/protocols/Aws_json1_0.js
  var se_DescribeEndpointsCommand = async (input, context) => {
    const headers = sharedHeaders2("DescribeEndpoints");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest2(context, headers, "/", void 0, body);
  };
  var se_QueryCommand = async (input, context) => {
    const headers = sharedHeaders2("Query");
    let body;
    body = JSON.stringify(se_QueryInput(input, context));
    return buildHttpRpcRequest2(context, headers, "/", void 0, body);
  };
  var de_DescribeEndpointsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return de_CommandError2(output, context);
    }
    const data = await parseJsonBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
      $metadata: deserializeMetadata3(output),
      ...contents
    };
    return response;
  };
  var de_QueryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
      return de_CommandError2(output, context);
    }
    const data = await parseJsonBody(output.body, context);
    let contents = {};
    contents = de_QueryOutput(data, context);
    const response = {
      $metadata: deserializeMetadata3(output),
      ...contents
    };
    return response;
  };
  var de_CommandError2 = async (output, context) => {
    const parsedOutput = {
      ...output,
      body: await parseJsonErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
      case "InternalServerError":
      case "com.amazonaws.dynamodb#InternalServerError":
        throw await de_InternalServerErrorRes(parsedOutput, context);
      case "RequestLimitExceeded":
      case "com.amazonaws.dynamodb#RequestLimitExceeded":
        throw await de_RequestLimitExceededRes(parsedOutput, context);
      case "InvalidEndpointException":
      case "com.amazonaws.dynamodb#InvalidEndpointException":
        throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
      case "ProvisionedThroughputExceededException":
      case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
        throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
      case "ResourceNotFoundException":
      case "com.amazonaws.dynamodb#ResourceNotFoundException":
        throw await de_ResourceNotFoundExceptionRes2(parsedOutput, context);
      case "ItemCollectionSizeLimitExceededException":
      case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
        throw await de_ItemCollectionSizeLimitExceededExceptionRes(parsedOutput, context);
      case "BackupInUseException":
      case "com.amazonaws.dynamodb#BackupInUseException":
        throw await de_BackupInUseExceptionRes(parsedOutput, context);
      case "ContinuousBackupsUnavailableException":
      case "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException":
        throw await de_ContinuousBackupsUnavailableExceptionRes(parsedOutput, context);
      case "LimitExceededException":
      case "com.amazonaws.dynamodb#LimitExceededException":
        throw await de_LimitExceededExceptionRes2(parsedOutput, context);
      case "TableInUseException":
      case "com.amazonaws.dynamodb#TableInUseException":
        throw await de_TableInUseExceptionRes(parsedOutput, context);
      case "TableNotFoundException":
      case "com.amazonaws.dynamodb#TableNotFoundException":
        throw await de_TableNotFoundExceptionRes(parsedOutput, context);
      case "GlobalTableAlreadyExistsException":
      case "com.amazonaws.dynamodb#GlobalTableAlreadyExistsException":
        throw await de_GlobalTableAlreadyExistsExceptionRes(parsedOutput, context);
      case "ResourceInUseException":
      case "com.amazonaws.dynamodb#ResourceInUseException":
        throw await de_ResourceInUseExceptionRes(parsedOutput, context);
      case "BackupNotFoundException":
      case "com.amazonaws.dynamodb#BackupNotFoundException":
        throw await de_BackupNotFoundExceptionRes(parsedOutput, context);
      case "ConditionalCheckFailedException":
      case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
        throw await de_ConditionalCheckFailedExceptionRes(parsedOutput, context);
      case "TransactionConflictException":
      case "com.amazonaws.dynamodb#TransactionConflictException":
        throw await de_TransactionConflictExceptionRes(parsedOutput, context);
      case "ExportNotFoundException":
      case "com.amazonaws.dynamodb#ExportNotFoundException":
        throw await de_ExportNotFoundExceptionRes(parsedOutput, context);
      case "GlobalTableNotFoundException":
      case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
        throw await de_GlobalTableNotFoundExceptionRes(parsedOutput, context);
      case "ImportNotFoundException":
      case "com.amazonaws.dynamodb#ImportNotFoundException":
        throw await de_ImportNotFoundExceptionRes(parsedOutput, context);
      case "DuplicateItemException":
      case "com.amazonaws.dynamodb#DuplicateItemException":
        throw await de_DuplicateItemExceptionRes(parsedOutput, context);
      case "IdempotentParameterMismatchException":
      case "com.amazonaws.dynamodb#IdempotentParameterMismatchException":
        throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
      case "TransactionCanceledException":
      case "com.amazonaws.dynamodb#TransactionCanceledException":
        throw await de_TransactionCanceledExceptionRes(parsedOutput, context);
      case "TransactionInProgressException":
      case "com.amazonaws.dynamodb#TransactionInProgressException":
        throw await de_TransactionInProgressExceptionRes(parsedOutput, context);
      case "ExportConflictException":
      case "com.amazonaws.dynamodb#ExportConflictException":
        throw await de_ExportConflictExceptionRes(parsedOutput, context);
      case "InvalidExportTimeException":
      case "com.amazonaws.dynamodb#InvalidExportTimeException":
        throw await de_InvalidExportTimeExceptionRes(parsedOutput, context);
      case "PointInTimeRecoveryUnavailableException":
      case "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException":
        throw await de_PointInTimeRecoveryUnavailableExceptionRes(parsedOutput, context);
      case "ImportConflictException":
      case "com.amazonaws.dynamodb#ImportConflictException":
        throw await de_ImportConflictExceptionRes(parsedOutput, context);
      case "TableAlreadyExistsException":
      case "com.amazonaws.dynamodb#TableAlreadyExistsException":
        throw await de_TableAlreadyExistsExceptionRes(parsedOutput, context);
      case "InvalidRestoreTimeException":
      case "com.amazonaws.dynamodb#InvalidRestoreTimeException":
        throw await de_InvalidRestoreTimeExceptionRes(parsedOutput, context);
      case "ReplicaAlreadyExistsException":
      case "com.amazonaws.dynamodb#ReplicaAlreadyExistsException":
        throw await de_ReplicaAlreadyExistsExceptionRes(parsedOutput, context);
      case "ReplicaNotFoundException":
      case "com.amazonaws.dynamodb#ReplicaNotFoundException":
        throw await de_ReplicaNotFoundExceptionRes(parsedOutput, context);
      case "IndexNotFoundException":
      case "com.amazonaws.dynamodb#IndexNotFoundException":
        throw await de_IndexNotFoundExceptionRes(parsedOutput, context);
      default:
        const parsedBody = parsedOutput.body;
        return throwDefaultError3({
          output,
          parsedBody,
          errorCode
        });
    }
  };
  var de_BackupInUseExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new BackupInUseException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_BackupNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new BackupNotFoundException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_ConditionalCheckFailedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_ConditionalCheckFailedException(body, context);
    const exception = new ConditionalCheckFailedException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_ContinuousBackupsUnavailableExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ContinuousBackupsUnavailableException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_DuplicateItemExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new DuplicateItemException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_ExportConflictExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ExportConflictException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_ExportNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ExportNotFoundException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_GlobalTableAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new GlobalTableAlreadyExistsException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_GlobalTableNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new GlobalTableNotFoundException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_IdempotentParameterMismatchExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new IdempotentParameterMismatchException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_ImportConflictExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ImportConflictException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_ImportNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ImportNotFoundException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_IndexNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new IndexNotFoundException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_InternalServerErrorRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new InternalServerError({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_InvalidEndpointExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new InvalidEndpointException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_InvalidExportTimeExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new InvalidExportTimeException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_InvalidRestoreTimeExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new InvalidRestoreTimeException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_ItemCollectionSizeLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ItemCollectionSizeLimitExceededException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_LimitExceededExceptionRes2 = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new LimitExceededException2({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_PointInTimeRecoveryUnavailableExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new PointInTimeRecoveryUnavailableException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_ProvisionedThroughputExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ProvisionedThroughputExceededException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_ReplicaAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ReplicaAlreadyExistsException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_ReplicaNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ReplicaNotFoundException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_RequestLimitExceededRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new RequestLimitExceeded({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_ResourceInUseExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ResourceInUseException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_ResourceNotFoundExceptionRes2 = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ResourceNotFoundException2({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_TableAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new TableAlreadyExistsException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_TableInUseExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new TableInUseException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_TableNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new TableNotFoundException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_TransactionCanceledExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_TransactionCanceledException(body, context);
    const exception = new TransactionCanceledException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_TransactionConflictExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new TransactionConflictException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var de_TransactionInProgressExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new TransactionInProgressException({
      $metadata: deserializeMetadata3(parsedOutput),
      ...deserialized
    });
    return decorateServiceException(exception, body);
  };
  var se_AttributeValue = (input, context) => {
    return AttributeValue.visit(input, {
      B: (value) => ({ B: context.base64Encoder(value) }),
      BOOL: (value) => ({ BOOL: value }),
      BS: (value) => ({ BS: se_BinarySetAttributeValue(value, context) }),
      L: (value) => ({ L: se_ListAttributeValue(value, context) }),
      M: (value) => ({ M: se_MapAttributeValue(value, context) }),
      N: (value) => ({ N: value }),
      NS: (value) => ({ NS: _json(value) }),
      NULL: (value) => ({ NULL: value }),
      S: (value) => ({ S: value }),
      SS: (value) => ({ SS: _json(value) }),
      _: (name, value) => ({ name: value })
    });
  };
  var se_AttributeValueList = (input, context) => {
    return input.filter((e3) => e3 != null).map((entry) => {
      return se_AttributeValue(entry, context);
    });
  };
  var se_BinarySetAttributeValue = (input, context) => {
    return input.filter((e3) => e3 != null).map((entry) => {
      return context.base64Encoder(entry);
    });
  };
  var se_Condition = (input, context) => {
    return take(input, {
      AttributeValueList: (_) => se_AttributeValueList(_, context),
      ComparisonOperator: []
    });
  };
  var se_ExpressionAttributeValueMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = se_AttributeValue(value, context);
      return acc;
    }, {});
  };
  var se_FilterConditionMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = se_Condition(value, context);
      return acc;
    }, {});
  };
  var se_Key = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = se_AttributeValue(value, context);
      return acc;
    }, {});
  };
  var se_KeyConditions = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = se_Condition(value, context);
      return acc;
    }, {});
  };
  var se_ListAttributeValue = (input, context) => {
    return input.filter((e3) => e3 != null).map((entry) => {
      return se_AttributeValue(entry, context);
    });
  };
  var se_MapAttributeValue = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = se_AttributeValue(value, context);
      return acc;
    }, {});
  };
  var se_QueryInput = (input, context) => {
    return take(input, {
      AttributesToGet: _json,
      ConditionalOperator: [],
      ConsistentRead: [],
      ExclusiveStartKey: (_) => se_Key(_, context),
      ExpressionAttributeNames: _json,
      ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
      FilterExpression: [],
      IndexName: [],
      KeyConditionExpression: [],
      KeyConditions: (_) => se_KeyConditions(_, context),
      Limit: [],
      ProjectionExpression: [],
      QueryFilter: (_) => se_FilterConditionMap(_, context),
      ReturnConsumedCapacity: [],
      ScanIndexForward: [],
      Select: [],
      TableName: []
    });
  };
  var de_AttributeMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_AttributeValue(awsExpectUnion(value), context);
      return acc;
    }, {});
  };
  var de_AttributeValue = (output, context) => {
    if (output.B != null) {
      return {
        B: context.base64Decoder(output.B)
      };
    }
    if (expectBoolean(output.BOOL) !== void 0) {
      return { BOOL: expectBoolean(output.BOOL) };
    }
    if (output.BS != null) {
      return {
        BS: de_BinarySetAttributeValue(output.BS, context)
      };
    }
    if (output.L != null) {
      return {
        L: de_ListAttributeValue(output.L, context)
      };
    }
    if (output.M != null) {
      return {
        M: de_MapAttributeValue(output.M, context)
      };
    }
    if (expectString(output.N) !== void 0) {
      return { N: expectString(output.N) };
    }
    if (output.NS != null) {
      return {
        NS: _json(output.NS)
      };
    }
    if (expectBoolean(output.NULL) !== void 0) {
      return { NULL: expectBoolean(output.NULL) };
    }
    if (expectString(output.S) !== void 0) {
      return { S: expectString(output.S) };
    }
    if (output.SS != null) {
      return {
        SS: _json(output.SS)
      };
    }
    return { $unknown: Object.entries(output)[0] };
  };
  var de_BinarySetAttributeValue = (output, context) => {
    const retVal = (output || []).filter((e3) => e3 != null).map((entry) => {
      return context.base64Decoder(entry);
    });
    return retVal;
  };
  var de_CancellationReason = (output, context) => {
    return take(output, {
      Code: expectString,
      Item: (_) => de_AttributeMap(_, context),
      Message: expectString
    });
  };
  var de_CancellationReasonList = (output, context) => {
    const retVal = (output || []).filter((e3) => e3 != null).map((entry) => {
      return de_CancellationReason(entry, context);
    });
    return retVal;
  };
  var de_Capacity = (output, context) => {
    return take(output, {
      CapacityUnits: limitedParseDouble,
      ReadCapacityUnits: limitedParseDouble,
      WriteCapacityUnits: limitedParseDouble
    });
  };
  var de_ConditionalCheckFailedException = (output, context) => {
    return take(output, {
      Item: (_) => de_AttributeMap(_, context),
      message: expectString
    });
  };
  var de_ConsumedCapacity = (output, context) => {
    return take(output, {
      CapacityUnits: limitedParseDouble,
      GlobalSecondaryIndexes: (_) => de_SecondaryIndexesCapacityMap(_, context),
      LocalSecondaryIndexes: (_) => de_SecondaryIndexesCapacityMap(_, context),
      ReadCapacityUnits: limitedParseDouble,
      Table: (_) => de_Capacity(_, context),
      TableName: expectString,
      WriteCapacityUnits: limitedParseDouble
    });
  };
  var de_ItemList = (output, context) => {
    const retVal = (output || []).filter((e3) => e3 != null).map((entry) => {
      return de_AttributeMap(entry, context);
    });
    return retVal;
  };
  var de_Key = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_AttributeValue(awsExpectUnion(value), context);
      return acc;
    }, {});
  };
  var de_ListAttributeValue = (output, context) => {
    const retVal = (output || []).filter((e3) => e3 != null).map((entry) => {
      return de_AttributeValue(awsExpectUnion(entry), context);
    });
    return retVal;
  };
  var de_MapAttributeValue = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_AttributeValue(awsExpectUnion(value), context);
      return acc;
    }, {});
  };
  var de_QueryOutput = (output, context) => {
    return take(output, {
      ConsumedCapacity: (_) => de_ConsumedCapacity(_, context),
      Count: expectInt32,
      Items: (_) => de_ItemList(_, context),
      LastEvaluatedKey: (_) => de_Key(_, context),
      ScannedCount: expectInt32
    });
  };
  var de_SecondaryIndexesCapacityMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_Capacity(value, context);
      return acc;
    }, {});
  };
  var de_TransactionCanceledException = (output, context) => {
    return take(output, {
      CancellationReasons: (_) => de_CancellationReasonList(_, context),
      Message: expectString
    });
  };
  var deserializeMetadata3 = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"]
  });
  var throwDefaultError3 = withBaseException(DynamoDBServiceException);
  var buildHttpRpcRequest2 = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
      protocol,
      hostname,
      port,
      method: "POST",
      path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
      headers
    };
    if (resolvedHostname !== void 0) {
      contents.hostname = resolvedHostname;
    }
    if (body !== void 0) {
      contents.body = body;
    }
    return new HttpRequest(contents);
  };
  function sharedHeaders2(operation) {
    return {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": `DynamoDB_20120810.${operation}`
    };
  }

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeEndpointsCommand.js
  var DescribeEndpointsCommand = class extends Command.classBuilder().ep({
    ...commonParams2
  }).m(function(Command2, cs, config, o3) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
    ];
  }).s("DynamoDB_20120810", "DescribeEndpoints", {}).n("DynamoDBClient", "DescribeEndpointsCommand").f(void 0, void 0).ser(se_DescribeEndpointsCommand).de(de_DescribeEndpointsCommand).build() {
  };

  // node_modules/@aws-sdk/client-dynamodb/package.json
  var package_default2 = {
    name: "@aws-sdk/client-dynamodb",
    description: "AWS SDK for JavaScript Dynamodb Client for Node.js, Browser and React Native",
    version: "3.529.1",
    scripts: {
      build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
      "build:cjs": "node ../../scripts/compilation/inline client-dynamodb",
      "build:es": "tsc -p tsconfig.es.json",
      "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
      "build:types": "tsc -p tsconfig.types.json",
      "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
      clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
      "extract:docs": "api-extractor run --local",
      "generate:client": "node ../../scripts/generate-clients/single-service --solo dynamodb"
    },
    main: "./dist-cjs/index.js",
    types: "./dist-types/index.d.ts",
    module: "./dist-es/index.js",
    sideEffects: false,
    dependencies: {
      "@aws-crypto/sha256-browser": "3.0.0",
      "@aws-crypto/sha256-js": "3.0.0",
      "@aws-sdk/client-sts": "3.529.1",
      "@aws-sdk/core": "3.529.1",
      "@aws-sdk/credential-provider-node": "3.529.1",
      "@aws-sdk/middleware-endpoint-discovery": "3.525.0",
      "@aws-sdk/middleware-host-header": "3.523.0",
      "@aws-sdk/middleware-logger": "3.523.0",
      "@aws-sdk/middleware-recursion-detection": "3.523.0",
      "@aws-sdk/middleware-user-agent": "3.525.0",
      "@aws-sdk/region-config-resolver": "3.525.0",
      "@aws-sdk/types": "3.523.0",
      "@aws-sdk/util-endpoints": "3.525.0",
      "@aws-sdk/util-user-agent-browser": "3.523.0",
      "@aws-sdk/util-user-agent-node": "3.525.0",
      "@smithy/config-resolver": "^2.1.4",
      "@smithy/core": "^1.3.5",
      "@smithy/fetch-http-handler": "^2.4.3",
      "@smithy/hash-node": "^2.1.3",
      "@smithy/invalid-dependency": "^2.1.3",
      "@smithy/middleware-content-length": "^2.1.3",
      "@smithy/middleware-endpoint": "^2.4.4",
      "@smithy/middleware-retry": "^2.1.4",
      "@smithy/middleware-serde": "^2.1.3",
      "@smithy/middleware-stack": "^2.1.3",
      "@smithy/node-config-provider": "^2.2.4",
      "@smithy/node-http-handler": "^2.4.1",
      "@smithy/protocol-http": "^3.2.1",
      "@smithy/smithy-client": "^2.4.2",
      "@smithy/types": "^2.10.1",
      "@smithy/url-parser": "^2.1.3",
      "@smithy/util-base64": "^2.1.1",
      "@smithy/util-body-length-browser": "^2.1.1",
      "@smithy/util-body-length-node": "^2.2.1",
      "@smithy/util-defaults-mode-browser": "^2.1.4",
      "@smithy/util-defaults-mode-node": "^2.2.3",
      "@smithy/util-endpoints": "^1.1.4",
      "@smithy/util-middleware": "^2.1.3",
      "@smithy/util-retry": "^2.1.3",
      "@smithy/util-utf8": "^2.1.1",
      "@smithy/util-waiter": "^2.1.3",
      tslib: "^2.5.0",
      uuid: "^9.0.1"
    },
    devDependencies: {
      "@smithy/service-client-documentation-generator": "^2.1.1",
      "@tsconfig/node14": "1.0.3",
      "@types/node": "^14.14.31",
      "@types/uuid": "^9.0.4",
      concurrently: "7.0.0",
      "downlevel-dts": "0.10.1",
      rimraf: "3.0.2",
      typescript: "~4.9.5"
    },
    engines: {
      node: ">=14.0.0"
    },
    typesVersions: {
      "<4.0": {
        "dist-types/*": [
          "dist-types/ts3.4/*"
        ]
      }
    },
    files: [
      "dist-*/**"
    ],
    author: {
      name: "AWS SDK for JavaScript Team",
      url: "https://aws.amazon.com/javascript/"
    },
    license: "Apache-2.0",
    browser: {
      "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
    },
    "react-native": {
      "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
    },
    homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-dynamodb",
    repository: {
      type: "git",
      url: "https://github.com/aws/aws-sdk-js-v3.git",
      directory: "clients/client-dynamodb"
    }
  };

  // node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.browser.js
  var import_sha256_browser2 = __toESM(require_build5());
  init_dist_es33();
  init_dist_es11();
  init_dist_es23();
  init_dist_es34();
  init_dist_es35();
  init_dist_es17();

  // node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.shared.js
  init_dist_es32();
  init_dist_es26();
  init_dist_es13();
  init_dist_es20();
  init_dist_es19();

  // node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/endpointResolver.js
  init_dist_es6();

  // node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/ruleset.js
  var w = "required";
  var x = "fn";
  var y = "argv";
  var z = "ref";
  var a2 = true;
  var b2 = "isSet";
  var c2 = "booleanEquals";
  var d2 = "error";
  var e2 = "endpoint";
  var f2 = "tree";
  var g2 = "PartitionResult";
  var h2 = "getAttr";
  var i2 = "stringEquals";
  var j2 = { [w]: false, "type": "String" };
  var k2 = { [w]: true, "default": false, "type": "Boolean" };
  var l2 = { [z]: "Endpoint" };
  var m2 = { [x]: c2, [y]: [{ [z]: "UseFIPS" }, true] };
  var n2 = { [x]: c2, [y]: [{ [z]: "UseDualStack" }, true] };
  var o2 = {};
  var p2 = { [z]: "Region" };
  var q2 = { [x]: h2, [y]: [{ [z]: g2 }, "supportsFIPS"] };
  var r2 = { [z]: g2 };
  var s2 = { [x]: c2, [y]: [true, { [x]: h2, [y]: [r2, "supportsDualStack"] }] };
  var t2 = [m2];
  var u2 = [n2];
  var v2 = [p2];
  var _data2 = { version: "1.0", parameters: { Region: j2, UseDualStack: k2, UseFIPS: k2, Endpoint: j2 }, rules: [{ conditions: [{ [x]: b2, [y]: [l2] }], rules: [{ conditions: t2, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d2 }, { conditions: u2, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d2 }, { endpoint: { url: l2, properties: o2, headers: o2 }, type: e2 }], type: f2 }, { conditions: [{ [x]: b2, [y]: v2 }], rules: [{ conditions: [{ [x]: "aws.partition", [y]: v2, assign: g2 }], rules: [{ conditions: [m2, n2], rules: [{ conditions: [{ [x]: c2, [y]: [a2, q2] }, s2], rules: [{ endpoint: { url: "https://dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: o2, headers: o2 }, type: e2 }], type: f2 }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d2 }], type: f2 }, { conditions: t2, rules: [{ conditions: [{ [x]: c2, [y]: [q2, a2] }], rules: [{ conditions: [{ [x]: i2, [y]: [{ [x]: h2, [y]: [r2, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://dynamodb.{Region}.amazonaws.com", properties: o2, headers: o2 }, type: e2 }, { endpoint: { url: "https://dynamodb-fips.{Region}.{PartitionResult#dnsSuffix}", properties: o2, headers: o2 }, type: e2 }], type: f2 }, { error: "FIPS is enabled but this partition does not support FIPS", type: d2 }], type: f2 }, { conditions: u2, rules: [{ conditions: [s2], rules: [{ endpoint: { url: "https://dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: o2, headers: o2 }, type: e2 }], type: f2 }, { error: "DualStack is enabled but this partition does not support DualStack", type: d2 }], type: f2 }, { conditions: [{ [x]: i2, [y]: [p2, "local"] }], endpoint: { url: "http://localhost:8000", properties: { authSchemes: [{ name: "sigv4", signingName: "dynamodb", signingRegion: "us-east-1" }] }, headers: o2 }, type: e2 }, { endpoint: { url: "https://dynamodb.{Region}.{PartitionResult#dnsSuffix}", properties: o2, headers: o2 }, type: e2 }], type: f2 }], type: f2 }, { error: "Invalid Configuration: Missing Region", type: d2 }] };
  var ruleSet2 = _data2;

  // node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/endpointResolver.js
  var defaultEndpointResolver2 = (endpointParams, context = {}) => {
    return resolveEndpoint(ruleSet2, {
      endpointParams,
      logger: context.logger
    });
  };

  // node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.shared.js
  var getRuntimeConfig3 = (config) => {
    return {
      apiVersion: "2012-08-10",
      base64Decoder: config?.base64Decoder ?? fromBase64,
      base64Encoder: config?.base64Encoder ?? toBase64,
      disableHostPrefix: config?.disableHostPrefix ?? false,
      endpointProvider: config?.endpointProvider ?? defaultEndpointResolver2,
      extensions: config?.extensions ?? [],
      httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultDynamoDBHttpAuthSchemeProvider,
      httpAuthSchemes: config?.httpAuthSchemes ?? [
        {
          schemeId: "aws.auth#sigv4",
          identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
          signer: new AwsSdkSigV4Signer()
        }
      ],
      logger: config?.logger ?? new NoOpLogger(),
      serviceId: config?.serviceId ?? "DynamoDB",
      urlParser: config?.urlParser ?? parseUrl,
      utf8Decoder: config?.utf8Decoder ?? fromUtf8,
      utf8Encoder: config?.utf8Encoder ?? toUtf8
    };
  };

  // node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.browser.js
  init_dist_es26();
  init_dist_es37();
  var getRuntimeConfig4 = (config) => {
    const defaultsMode = resolveDefaultsModeConfig(config);
    const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
    const clientSharedValues = getRuntimeConfig3(config);
    return {
      ...clientSharedValues,
      ...config,
      runtime: "browser",
      defaultsMode,
      bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
      credentialDefaultProvider: config?.credentialDefaultProvider ?? ((_) => () => Promise.reject(new Error("Credential is missing"))),
      defaultUserAgentProvider: config?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default2.version }),
      endpointDiscoveryEnabledProvider: config?.endpointDiscoveryEnabledProvider ?? (() => Promise.resolve(void 0)),
      maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
      region: config?.region ?? invalidProvider("Region is missing"),
      requestHandler: FetchHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
      retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
      sha256: config?.sha256 ?? import_sha256_browser2.Sha256,
      streamCollector: config?.streamCollector ?? streamCollector,
      useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
      useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))
    };
  };

  // node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeExtensions.js
  init_dist_es38();
  init_dist_es2();
  init_dist_es26();

  // node_modules/@aws-sdk/client-dynamodb/dist-es/auth/httpAuthExtensionConfiguration.js
  var getHttpAuthExtensionConfiguration2 = (runtimeConfig) => {
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
    return {
      setHttpAuthScheme(httpAuthScheme) {
        const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
        if (index === -1) {
          _httpAuthSchemes.push(httpAuthScheme);
        } else {
          _httpAuthSchemes.splice(index, 1, httpAuthScheme);
        }
      },
      httpAuthSchemes() {
        return _httpAuthSchemes;
      },
      setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
        _httpAuthSchemeProvider = httpAuthSchemeProvider;
      },
      httpAuthSchemeProvider() {
        return _httpAuthSchemeProvider;
      },
      setCredentials(credentials) {
        _credentials = credentials;
      },
      credentials() {
        return _credentials;
      }
    };
  };
  var resolveHttpAuthRuntimeConfig2 = (config) => {
    return {
      httpAuthSchemes: config.httpAuthSchemes(),
      httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
      credentials: config.credentials()
    };
  };

  // node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeExtensions.js
  var asPartial2 = (t3) => t3;
  var resolveRuntimeExtensions2 = (runtimeConfig, extensions) => {
    const extensionConfiguration = {
      ...asPartial2(getAwsRegionExtensionConfiguration(runtimeConfig)),
      ...asPartial2(getDefaultExtensionConfiguration(runtimeConfig)),
      ...asPartial2(getHttpHandlerExtensionConfiguration(runtimeConfig)),
      ...asPartial2(getHttpAuthExtensionConfiguration2(runtimeConfig))
    };
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return {
      ...runtimeConfig,
      ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
      ...resolveDefaultRuntimeConfig(extensionConfiguration),
      ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
      ...resolveHttpAuthRuntimeConfig2(extensionConfiguration)
    };
  };

  // node_modules/@aws-sdk/client-dynamodb/dist-es/DynamoDBClient.js
  var DynamoDBClient = class extends Client {
    constructor(...[configuration]) {
      const _config_0 = getRuntimeConfig4(configuration || {});
      const _config_1 = resolveClientEndpointParameters2(_config_0);
      const _config_2 = resolveRegionConfig(_config_1);
      const _config_3 = resolveEndpointConfig(_config_2);
      const _config_4 = resolveRetryConfig(_config_3);
      const _config_5 = resolveHostHeaderConfig(_config_4);
      const _config_6 = resolveUserAgentConfig(_config_5);
      const _config_7 = resolveHttpAuthSchemeConfig2(_config_6);
      const _config_8 = resolveEndpointDiscoveryConfig(_config_7, {
        endpointDiscoveryCommandCtor: DescribeEndpointsCommand
      });
      const _config_9 = resolveRuntimeExtensions2(_config_8, configuration?.extensions || []);
      super(_config_9);
      this.config = _config_9;
      this.middlewareStack.use(getRetryPlugin(this.config));
      this.middlewareStack.use(getContentLengthPlugin(this.config));
      this.middlewareStack.use(getHostHeaderPlugin(this.config));
      this.middlewareStack.use(getLoggerPlugin(this.config));
      this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
      this.middlewareStack.use(getUserAgentPlugin(this.config));
      this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
        identityProviderConfigProvider: this.getIdentityProviderConfigProvider()
      }));
      this.middlewareStack.use(getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
    getDefaultHttpAuthSchemeParametersProvider() {
      return defaultDynamoDBHttpAuthSchemeParametersProvider;
    }
    getIdentityProviderConfigProvider() {
      return async (config) => new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config.credentials
      });
    }
  };

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/QueryCommand.js
  init_dist_es15();
  init_dist_es14();
  init_dist_es26();
  var QueryCommand = class extends Command.classBuilder().ep({
    ...commonParams2
  }).m(function(Command2, cs, config, o3) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
    ];
  }).s("DynamoDB_20120810", "Query", {}).n("DynamoDBClient", "QueryCommand").f(void 0, void 0).ser(se_QueryCommand).de(de_QueryCommand).build() {
  };

  // src/utils/createDynamoDBClient.js
  var createDynamoDBClient = (region = "us-west-2", identityPoolId = "us-west-2:5cf2c915-001b-4190-ad65-6f10af3a375c") => {
    return new DynamoDBClient({
      region,
      credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({ region }),
        identityPoolId
      })
    });
  };

  // src/utils/fetchDynamoDB.js
  async function fetchPostsFromBoard(tableName, dynamoDBClient, theDirectoryWeWant, limit = 5, startAfterPostId = null) {
    try {
      const params = {
        TableName: tableName,
        // Replace with your DynamoDB table name
        KeyConditionExpression: "#pk = :boardId",
        ExpressionAttributeNames: {
          "#pk": "dir"
        },
        ExpressionAttributeValues: {
          ":boardId": { S: theDirectoryWeWant }
        },
        ScanIndexForward: false,
        // Set to false to get the newest posts first
        Limit: limit
      };
      if (startAfterPostId) {
        params.ExclusiveStartKey = {
          "dir": { S: theDirectoryWeWant },
          "unix": { S: startAfterPostId }
        };
      }
      const command = new QueryCommand(params);
      const { Items, LastEvaluatedKey } = await dynamoDBClient.send(command);
      let processedItems = [];
      for (let i3 = 0; i3 < Items.length; i3++) {
        if (Items[i3].JSON) {
          const fromJson = JSON.parse(Items[i3].JSON.S);
          processedItems[i3] = {
            dir: fromJson.dir.S,
            imgURL: fromJson.imgURL || "",
            comments: fromJson.comments || "",
            ogfilename: fromJson.ogfilename || "",
            text: fromJson.text || "",
            unix: fromJson.unix || ""
          };
        } else {
          processedItems[i3] = {
            dir: Items[i3].dir.S,
            imgURL: Items[i3].imgURL?.S || "",
            comments: Items[i3].comments?.S || "",
            ogfilename: Items[i3].ogfilename?.S || "",
            text: Items[i3].text?.S || "",
            unix: Items[i3].unix.N || ""
          };
        }
      }
      return {
        items: processedItems,
        lastEvaluatedKey: LastEvaluatedKey ? LastEvaluatedKey.unix.S : null
      };
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw new Error("Failed to fetch posts");
    }
  }

  // src/components/girl.js
  var sock = (imgUri, imgFileName, imgRes, commentsCount, txt, id, timeStr, unix) => `
    <article>
        <img class="image" id="img-${id}" src="${imgUri}" alt="user attached image" loading="lazy" onclick="imgToggleBig(this);">
        <div class="meta">
            <span style="max-width: 50%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${imgFileName}</span>
            <span style="display: inline-block; overflow: hidden;"><span id="imgRes-${id}">(${imgRes})</span> / <i>${timeStr}</i></span>
        </div>
        <div class="body">
            ${txt}
        </div>
        <div id="comments-${unix}" class="comments">

            <details>
                <summary>Write comment</summary>
                <form>
                    <textarea id="comment-textarea-${unix}" class="comment-body" name="comment-body" rows="4"></textarea>
                    <br>
                    <input id="comment-button-${unix}" class="comment-form-submit" type="submit" value="Add comment" onclick="submitComment(event, this)">
                </form>
            </details>
            
        </div>
    </article>
`;

  // node_modules/date-fns/toDate.mjs
  function toDate2(argument) {
    const argStr = Object.prototype.toString.call(argument);
    if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
      return new argument.constructor(+argument);
    } else if (typeof argument === "number" || argStr === "[object Number]" || typeof argument === "string" || argStr === "[object String]") {
      return new Date(argument);
    } else {
      return /* @__PURE__ */ new Date(NaN);
    }
  }

  // node_modules/date-fns/constants.mjs
  var daysInYear = 365.2425;
  var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
  var minTime = -maxTime;
  var minutesInMonth = 43200;
  var minutesInDay = 1440;
  var secondsInHour = 3600;
  var secondsInDay = secondsInHour * 24;
  var secondsInWeek = secondsInDay * 7;
  var secondsInYear = secondsInDay * daysInYear;
  var secondsInMonth = secondsInYear / 12;
  var secondsInQuarter = secondsInMonth * 3;

  // node_modules/date-fns/_lib/defaultOptions.mjs
  var defaultOptions = {};
  function getDefaultOptions() {
    return defaultOptions;
  }

  // node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs
  function getTimezoneOffsetInMilliseconds(date) {
    const _date = toDate2(date);
    const utcDate = new Date(
      Date.UTC(
        _date.getFullYear(),
        _date.getMonth(),
        _date.getDate(),
        _date.getHours(),
        _date.getMinutes(),
        _date.getSeconds(),
        _date.getMilliseconds()
      )
    );
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
  }

  // node_modules/date-fns/compareAsc.mjs
  function compareAsc(dateLeft, dateRight) {
    const _dateLeft = toDate2(dateLeft);
    const _dateRight = toDate2(dateRight);
    const diff = _dateLeft.getTime() - _dateRight.getTime();
    if (diff < 0) {
      return -1;
    } else if (diff > 0) {
      return 1;
    } else {
      return diff;
    }
  }

  // node_modules/date-fns/differenceInCalendarMonths.mjs
  function differenceInCalendarMonths(dateLeft, dateRight) {
    const _dateLeft = toDate2(dateLeft);
    const _dateRight = toDate2(dateRight);
    const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();
    const monthDiff = _dateLeft.getMonth() - _dateRight.getMonth();
    return yearDiff * 12 + monthDiff;
  }

  // node_modules/date-fns/_lib/getRoundingMethod.mjs
  function getRoundingMethod(method) {
    return (number) => {
      const round = method ? Math[method] : Math.trunc;
      const result = round(number);
      return result === 0 ? 0 : result;
    };
  }

  // node_modules/date-fns/differenceInMilliseconds.mjs
  function differenceInMilliseconds(dateLeft, dateRight) {
    return +toDate2(dateLeft) - +toDate2(dateRight);
  }

  // node_modules/date-fns/endOfDay.mjs
  function endOfDay(date) {
    const _date = toDate2(date);
    _date.setHours(23, 59, 59, 999);
    return _date;
  }

  // node_modules/date-fns/endOfMonth.mjs
  function endOfMonth(date) {
    const _date = toDate2(date);
    const month = _date.getMonth();
    _date.setFullYear(_date.getFullYear(), month + 1, 0);
    _date.setHours(23, 59, 59, 999);
    return _date;
  }

  // node_modules/date-fns/isLastDayOfMonth.mjs
  function isLastDayOfMonth(date) {
    const _date = toDate2(date);
    return +endOfDay(_date) === +endOfMonth(_date);
  }

  // node_modules/date-fns/differenceInMonths.mjs
  function differenceInMonths(dateLeft, dateRight) {
    const _dateLeft = toDate2(dateLeft);
    const _dateRight = toDate2(dateRight);
    const sign = compareAsc(_dateLeft, _dateRight);
    const difference = Math.abs(
      differenceInCalendarMonths(_dateLeft, _dateRight)
    );
    let result;
    if (difference < 1) {
      result = 0;
    } else {
      if (_dateLeft.getMonth() === 1 && _dateLeft.getDate() > 27) {
        _dateLeft.setDate(30);
      }
      _dateLeft.setMonth(_dateLeft.getMonth() - sign * difference);
      let isLastMonthNotFull = compareAsc(_dateLeft, _dateRight) === -sign;
      if (isLastDayOfMonth(toDate2(dateLeft)) && difference === 1 && compareAsc(dateLeft, _dateRight) === 1) {
        isLastMonthNotFull = false;
      }
      result = sign * (difference - Number(isLastMonthNotFull));
    }
    return result === 0 ? 0 : result;
  }

  // node_modules/date-fns/differenceInSeconds.mjs
  function differenceInSeconds(dateLeft, dateRight, options) {
    const diff = differenceInMilliseconds(dateLeft, dateRight) / 1e3;
    return getRoundingMethod(options?.roundingMethod)(diff);
  }

  // node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs
  var formatDistanceLocale = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
    },
    xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
    },
    xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
    },
    aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
    },
    xHours: {
      one: "1 hour",
      other: "{{count}} hours"
    },
    xDays: {
      one: "1 day",
      other: "{{count}} days"
    },
    aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
    },
    xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
    },
    aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
    },
    xMonths: {
      one: "1 month",
      other: "{{count}} months"
    },
    aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
    },
    xYears: {
      one: "1 year",
      other: "{{count}} years"
    },
    overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
    },
    almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
    }
  };
  var formatDistance = (token, count, options) => {
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
      result = tokenValue;
    } else if (count === 1) {
      result = tokenValue.one;
    } else {
      result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "in " + result;
      } else {
        return result + " ago";
      }
    }
    return result;
  };

  // node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs
  function buildFormatLongFn(args) {
    return (options = {}) => {
      const width = options.width ? String(options.width) : args.defaultWidth;
      const format = args.formats[width] || args.formats[args.defaultWidth];
      return format;
    };
  }

  // node_modules/date-fns/locale/en-US/_lib/formatLong.mjs
  var dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  };
  var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  };
  var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  };
  var formatLong = {
    date: buildFormatLongFn({
      formats: dateFormats,
      defaultWidth: "full"
    }),
    time: buildFormatLongFn({
      formats: timeFormats,
      defaultWidth: "full"
    }),
    dateTime: buildFormatLongFn({
      formats: dateTimeFormats,
      defaultWidth: "full"
    })
  };

  // node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs
  var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  };
  var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];

  // node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs
  function buildLocalizeFn(args) {
    return (value, options) => {
      const context = options?.context ? String(options.context) : "standalone";
      let valuesArray;
      if (context === "formatting" && args.formattingValues) {
        const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
        const width = options?.width ? String(options.width) : defaultWidth;
        valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
      } else {
        const defaultWidth = args.defaultWidth;
        const width = options?.width ? String(options.width) : args.defaultWidth;
        valuesArray = args.values[width] || args.values[defaultWidth];
      }
      const index = args.argumentCallback ? args.argumentCallback(value) : value;
      return valuesArray[index];
    };
  }

  // node_modules/date-fns/locale/en-US/_lib/localize.mjs
  var eraValues = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
  };
  var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
  };
  var monthValues = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  };
  var dayValues = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  };
  var dayPeriodValues = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    }
  };
  var formattingDayPeriodValues = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    }
  };
  var ordinalNumber = (dirtyNumber, _options) => {
    const number = Number(dirtyNumber);
    const rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
      switch (rem100 % 10) {
        case 1:
          return number + "st";
        case 2:
          return number + "nd";
        case 3:
          return number + "rd";
      }
    }
    return number + "th";
  };
  var localize = {
    ordinalNumber,
    era: buildLocalizeFn({
      values: eraValues,
      defaultWidth: "wide"
    }),
    quarter: buildLocalizeFn({
      values: quarterValues,
      defaultWidth: "wide",
      argumentCallback: (quarter) => quarter - 1
    }),
    month: buildLocalizeFn({
      values: monthValues,
      defaultWidth: "wide"
    }),
    day: buildLocalizeFn({
      values: dayValues,
      defaultWidth: "wide"
    }),
    dayPeriod: buildLocalizeFn({
      values: dayPeriodValues,
      defaultWidth: "wide",
      formattingValues: formattingDayPeriodValues,
      defaultFormattingWidth: "wide"
    })
  };

  // node_modules/date-fns/locale/_lib/buildMatchFn.mjs
  function buildMatchFn(args) {
    return (string, options = {}) => {
      const width = options.width;
      const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
      const matchResult = string.match(matchPattern);
      if (!matchResult) {
        return null;
      }
      const matchedString = matchResult[0];
      const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
      const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString))
      );
      let value;
      value = args.valueCallback ? args.valueCallback(key) : key;
      value = options.valueCallback ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      ) : value;
      const rest = string.slice(matchedString.length);
      return { value, rest };
    };
  }
  function findKey(object, predicate) {
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
        return key;
      }
    }
    return void 0;
  }
  function findIndex(array, predicate) {
    for (let key = 0; key < array.length; key++) {
      if (predicate(array[key])) {
        return key;
      }
    }
    return void 0;
  }

  // node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs
  function buildMatchPatternFn(args) {
    return (string, options = {}) => {
      const matchResult = string.match(args.matchPattern);
      if (!matchResult) return null;
      const matchedString = matchResult[0];
      const parseResult = string.match(args.parsePattern);
      if (!parseResult) return null;
      let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
      value = options.valueCallback ? options.valueCallback(value) : value;
      const rest = string.slice(matchedString.length);
      return { value, rest };
    };
  }

  // node_modules/date-fns/locale/en-US/_lib/match.mjs
  var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
  var parseOrdinalNumberPattern = /\d+/i;
  var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  };
  var parseEraPatterns = {
    any: [/^b/i, /^(a|c)/i]
  };
  var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  };
  var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
  };
  var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  };
  var parseMonthPatterns = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i
    ]
  };
  var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  };
  var parseDayPatterns = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  };
  var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  };
  var parseDayPeriodPatterns = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  };
  var match = {
    ordinalNumber: buildMatchPatternFn({
      matchPattern: matchOrdinalNumberPattern,
      parsePattern: parseOrdinalNumberPattern,
      valueCallback: (value) => parseInt(value, 10)
    }),
    era: buildMatchFn({
      matchPatterns: matchEraPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseEraPatterns,
      defaultParseWidth: "any"
    }),
    quarter: buildMatchFn({
      matchPatterns: matchQuarterPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseQuarterPatterns,
      defaultParseWidth: "any",
      valueCallback: (index) => index + 1
    }),
    month: buildMatchFn({
      matchPatterns: matchMonthPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseMonthPatterns,
      defaultParseWidth: "any"
    }),
    day: buildMatchFn({
      matchPatterns: matchDayPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseDayPatterns,
      defaultParseWidth: "any"
    }),
    dayPeriod: buildMatchFn({
      matchPatterns: matchDayPeriodPatterns,
      defaultMatchWidth: "any",
      parsePatterns: parseDayPeriodPatterns,
      defaultParseWidth: "any"
    })
  };

  // node_modules/date-fns/locale/en-US.mjs
  var enUS = {
    code: "en-US",
    formatDistance,
    formatLong,
    formatRelative,
    localize,
    match,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  };

  // node_modules/date-fns/formatDistance.mjs
  function formatDistance2(date, baseDate, options) {
    const defaultOptions2 = getDefaultOptions();
    const locale = options?.locale ?? defaultOptions2.locale ?? enUS;
    const minutesInAlmostTwoDays = 2520;
    const comparison = compareAsc(date, baseDate);
    if (isNaN(comparison)) {
      throw new RangeError("Invalid time value");
    }
    const localizeOptions = Object.assign({}, options, {
      addSuffix: options?.addSuffix,
      comparison
    });
    let dateLeft;
    let dateRight;
    if (comparison > 0) {
      dateLeft = toDate2(baseDate);
      dateRight = toDate2(date);
    } else {
      dateLeft = toDate2(date);
      dateRight = toDate2(baseDate);
    }
    const seconds = differenceInSeconds(dateRight, dateLeft);
    const offsetInSeconds = (getTimezoneOffsetInMilliseconds(dateRight) - getTimezoneOffsetInMilliseconds(dateLeft)) / 1e3;
    const minutes = Math.round((seconds - offsetInSeconds) / 60);
    let months;
    if (minutes < 2) {
      if (options?.includeSeconds) {
        if (seconds < 5) {
          return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
        } else if (seconds < 10) {
          return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
        } else if (seconds < 20) {
          return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
        } else if (seconds < 40) {
          return locale.formatDistance("halfAMinute", 0, localizeOptions);
        } else if (seconds < 60) {
          return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
        } else {
          return locale.formatDistance("xMinutes", 1, localizeOptions);
        }
      } else {
        if (minutes === 0) {
          return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
        } else {
          return locale.formatDistance("xMinutes", minutes, localizeOptions);
        }
      }
    } else if (minutes < 45) {
      return locale.formatDistance("xMinutes", minutes, localizeOptions);
    } else if (minutes < 90) {
      return locale.formatDistance("aboutXHours", 1, localizeOptions);
    } else if (minutes < minutesInDay) {
      const hours = Math.round(minutes / 60);
      return locale.formatDistance("aboutXHours", hours, localizeOptions);
    } else if (minutes < minutesInAlmostTwoDays) {
      return locale.formatDistance("xDays", 1, localizeOptions);
    } else if (minutes < minutesInMonth) {
      const days = Math.round(minutes / minutesInDay);
      return locale.formatDistance("xDays", days, localizeOptions);
    } else if (minutes < minutesInMonth * 2) {
      months = Math.round(minutes / minutesInMonth);
      return locale.formatDistance("aboutXMonths", months, localizeOptions);
    }
    months = differenceInMonths(dateRight, dateLeft);
    if (months < 12) {
      const nearestMonth = Math.round(minutes / minutesInMonth);
      return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
    } else {
      const monthsSinceStartOfYear = months % 12;
      const years = Math.trunc(months / 12);
      if (monthsSinceStartOfYear < 3) {
        return locale.formatDistance("aboutXYears", years, localizeOptions);
      } else if (monthsSinceStartOfYear < 9) {
        return locale.formatDistance("overXYears", years, localizeOptions);
      } else {
        return locale.formatDistance("almostXYears", years + 1, localizeOptions);
      }
    }
  }

  // node_modules/date-fns/formatDistanceToNow.mjs
  function formatDistanceToNow(date, options) {
    return formatDistance2(date, Date.now(), options);
  }

  // src/fetchPosts.js
  var USER_POSTS_TABLE = "girlsockdir";
  async function main() {
    await getLatest(DIRECTORY);
  }
  async function getLatest(dir) {
    CuteModal.show("Loading....");
    let posts = await fetchPostsFromBoard(USER_POSTS_TABLE, createDynamoDBClient(), dir, 20);
    CuteModal.hide();
    if (posts.items.length === 0 || void 0 || null) alert("Nothing found or server error.");
    for (let i3 = 0; i3 < posts.items.length; i3++) {
      let userPost = sock(posts.items[i3].imgURL, posts.items[i3].ogfilename, "1x1", 0, posts.items[i3].text, posts.items[i3], compatibilityNewUnixTime(posts.items[i3].unix), posts.items[i3].unix);
      await $("#articles").inject(userPost);
      for (let c3 = 0; c3 < posts.items[i3].comments.length; c3++) {
        $(`#comments-${posts.items[i3].unix}`).inject(`<div class="comment">${posts.items[i3].comments[c3].text}</div>`);
      }
    }
    $$("img.image").forEach((img) => {
      const setDim = () => document.getElementById(`imgRes-${img.id.split("-")[1]}`).textContent = `(${img.naturalWidth}x${img.naturalHeight})`;
      img.complete ? setDim() : img.onload = setDim;
    });
  }
  function compatibilityNewUnixTime(unixTime) {
    if (unixTime < 1725108348) return unixToRelativeTime(unixTime * 1e3);
    else return unixToRelativeTime(unixTime);
  }
  var unixToRelativeTime = (unixTime) => formatDistanceToNow(new Date(unixTime)) + " ago";
  main();
})();
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
